import { Injectable } from '@nestjs/common';
import { AbstractAuthSqlDao } from './pgsql/abstract/auth.abstract';

@Injectable()
export class DatabaseService {
	constructor(
		public authSqlTxn: AbstractAuthSqlDao
	) { }
}
