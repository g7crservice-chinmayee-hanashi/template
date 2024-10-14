import { AppConfigService } from '@app/config/appconfig.service';
import AppLogger from '@app/core/logger/app-logger';
import { AppResponse, createResponse } from '@app/shared/appresponse.shared';
import { messages } from '@app/shared/messages.shared';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { AbstractAuthSqlDao } from '../abstract/auth.abstract';
import { PgSqlConstants } from '../connection/constants.pgsql';

@Injectable()
export class AuthSqlDao implements AbstractAuthSqlDao {
	constructor(
		// @Inject(PgSqlConstants.SECURITY_USERACCOUNTS_MODEL) private _userAccountsModel: typeof SecurityUsersAccount,
		@Inject(PgSqlConstants.SEQUELIZE_PROVIDER) private _sequelize: Sequelize,
		readonly _loggerSvc: AppLogger,
	) {}

	//#region hello world
	async helloWorld(): Promise<AppResponse> {
		try {
			return createResponse(HttpStatus.OK, messages.S4, 'Hello World!');
		} catch (error) {
			this._loggerSvc.error(error.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
			return createResponse(HttpStatus.INTERNAL_SERVER_ERROR, messages.E3);
		}
	}
	//#endregion
}
