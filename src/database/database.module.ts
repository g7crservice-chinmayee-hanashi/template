import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { sequelizeProvider } from './pgsql/connection/connection.pgsql';
import { postgresSqlDBModelsProvider } from './pgsql/connection/models.connection.pgsql';
import { AbstractAuthSqlDao } from './pgsql/abstract/auth.abstract';
import { AuthSqlDao } from './pgsql/dao/auth.dao';

@Module({
	providers: [   
		...sequelizeProvider,
		...postgresSqlDBModelsProvider,
		DatabaseService,
		{
			provide: AbstractAuthSqlDao,
			useClass: AuthSqlDao
		}
	],
	exports: [
		...sequelizeProvider,
		DatabaseService,
		...postgresSqlDBModelsProvider,
		{
			provide: AbstractAuthSqlDao,
			useClass: AuthSqlDao
		}
	]
})
export class DatabaseModule { }
