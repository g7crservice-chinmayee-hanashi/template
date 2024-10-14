import { AppConfigService } from '@app/config/appconfig.service';
import { PgSqlConstants } from '@app/database/pgsql/connection/constants.pgsql';
import { AppResponse, createResponse, messageFactory, messages } from '@app/shared';
import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @Inject(PgSqlConstants.SEQUELIZE_PROVIDER) private _sequelize: Sequelize,
    private readonly _appConfigSvc: AppConfigService,
  ) {
  
  }

  // Health check endpoint
  async healthz(checkDatabase?: boolean): Promise<AppResponse> {
    try {
      const { port } = this._appConfigSvc.get('app');
      if (checkDatabase) {
        await this._sequelize.authenticate(); // Check database connection
      }
      return createResponse(HttpStatus.OK, messageFactory(messages.S2, [port]));
    } catch (error) {
      this.logger.error('Health check failed', error);
      return createResponse(HttpStatus.INTERNAL_SERVER_ERROR, messages.E2);
    }
  }


}
