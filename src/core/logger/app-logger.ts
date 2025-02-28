import { AppConfigService } from '@app/config/appconfig.service';
import { Injectable, LoggerService } from '@nestjs/common';
import { Logger, createLogger, format, transports } from 'winston';
import { extensions, winstonAzureBlob } from 'winston-azure-blob';
import { unix_ts_now } from '@app/core/utils/timestamp.utils';

enum WinstonLogLevel {
	ERROR = 'error',
	WARN = 'warn',
	INFO = 'info',
	HTTP = 'http',
	VERBOSE = 'verbose',
	DEBUG = 'debug',
	SILLY = 'silly'
}

@Injectable()
export default class AppLogger implements LoggerService {
	public logger: Logger;
	private readonly loggerChannels = [];
	constructor(_appConfigSvc: AppConfigService) {
		const blobCred = _appConfigSvc.get('blobStorage'),
			{ combine, timestamp, label, json } = format,
			{ Console } = transports;

		this.loggerChannels.push(new Console());

		/**
		 * Log error into azure storage account
		 */

		this.loggerChannels.push(
			winstonAzureBlob({
				account: {
					name: blobCred.blobAccountName,
					key: blobCred.blobAccountKey
				},
				containerName: blobCred.blobLoggerContainer,
				blobName: 'app-logs/data-sharing-service',
				rotatePeriod: 'YYYY-MM-DD',
				bufferLogSize: 1,
				eol: '\n',
				extension: extensions.LOG,
				syncTimeout: 0
			})
		);

		this.loggerChannels.push(
			winstonAzureBlob({
				account: {
					name: blobCred.blobAccountName,
					key: blobCred.blobAccountKey
				},
				containerName: blobCred.blobLoggerContainer,
				level: 'error',
				blobName: 'errors/data-sharing-service',
				rotatePeriod: 'YYYY-MM-DD',
				bufferLogSize: 1,
				eol: '\n',
				extension: extensions.LOG,
				syncTimeout: 0
			})
		);

		const logFormat = combine(label({ label: 'template-api' }), timestamp({ format: () => unix_ts_now().toString() }), json());

		this.logger = createLogger({
			level: blobCred.logLevel || 'info',
			format: logFormat,
			transports: this.loggerChannels
		});
	}

	log(msg: any, status = 200, sid = '') {
		this.logger.log(WinstonLogLevel.INFO, { msg, status, sid });
	}
	error(msg: any, status = 500, sid = '') {
		this.logger.log(WinstonLogLevel.ERROR, { msg, status, sid });
	}
	warn(msg: any, route = '', status = 206, sid = '') {
		this.logger.log(WinstonLogLevel.WARN, { msg, route, status, sid });
	}
	debug?(msg: any, status = 200, sid = '') {
		this.logger.log(WinstonLogLevel.DEBUG, { msg, status, sid });
	}
	verbose?(msg: any, status = 200, sid = '') {
		this.logger.log(WinstonLogLevel.VERBOSE, { msg, status, sid });
	}
}
