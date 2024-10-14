import { AppConfigService } from '@app/config/appconfig.service';
import AppLogger from '@app/core/logger/app-logger';
import { DatabaseService } from '@app/database/database.service';
import { AbstractAuthSqlDao } from '@app/database/pgsql/abstract/auth.abstract';
import { AppResponse, createResponse } from '@app/shared/appresponse.shared';
import { messages } from '@app/shared/messages.shared';
import { HttpStatus, Injectable } from '@nestjs/common';
import { AbstractAuthSvc } from './auth.abstract';

@Injectable()
export class AuthService implements AbstractAuthSvc {
	private readonly _authTxn: AbstractAuthSqlDao;
	constructor(
		readonly _dbSvc: DatabaseService,
		readonly _loggerSvc: AppLogger,
	) {
		this._authTxn = _dbSvc.authSqlTxn;
	}

	//#region  hash password
	async helloWorldSvc(): Promise<AppResponse> {
		try {
			const res=await this._authTxn.helloWorld()
			return createResponse(HttpStatus.OK, messages.S4, res.data);
		} catch (error) {
			return createResponse(HttpStatus.INTERNAL_SERVER_ERROR, messages.E3);
		}
	}
	//#endregion
}
