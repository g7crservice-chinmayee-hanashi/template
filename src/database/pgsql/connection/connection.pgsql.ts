import { AppConfigService } from '@app/config/appconfig.service';
import AppLogger from '@app/core/logger/app-logger';
import { messageFactory, messages } from '@app/shared/messages.shared';
import { HttpStatus } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { PgSqlConstants } from './constants.pgsql';
import { models } from './models.connection.pgsql';

export const sequelizeProvider = [
	{
		provide: PgSqlConstants.SEQUELIZE_PROVIDER,
		useFactory: async (_appConfigSvc: AppConfigService, _logger: AppLogger) => {
			const sequelize: Sequelize = null;

			try {
				const dbConfig = _appConfigSvc.get('db').pgsql,
					sequelize = new Sequelize({
						...dbConfig, logging: true, dialectOptions: {
                            ssl: {
                                require: true,
                                rejectUnauthorized: false
                            }
						}
					});

				// for (const schemaName of SchemaGrp.ALL_SCHEMAS) {
				// 	await sequelize.createSchema(schemaName, {});
				// }	

				sequelize.addModels([...models]);

				// await sequelize.sync({ alter: true });
				sequelize.authenticate();
				_logger.log(messages.S3, HttpStatus.OK);
				return sequelize;
			} catch (err) {
				_logger.log(messageFactory(messages.E4, [err.stack]), HttpStatus.INTERNAL_SERVER_ERROR);
			} finally {
				/* If the Node process ends, dispose the sequelize connection */
				process.on('SIGINT', async () => {
					if (sequelize) {
						try {
							await sequelize.close();
							_logger.log(messages.E5, HttpStatus.OK);
						} catch (err) {
							_logger.log(messageFactory(messages.E6, [err.stack]), HttpStatus.INTERNAL_SERVER_ERROR);
						} finally {
							process.exit(0);
						}
					}
				});
			}
		},
		inject: [AppConfigService, AppLogger]
	}
];
