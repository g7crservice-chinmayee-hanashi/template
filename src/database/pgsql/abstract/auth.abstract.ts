import { AppResponse } from '@app/shared/appresponse.shared';

export abstract class AbstractAuthSqlDao {
	abstract helloWorld(): Promise<AppResponse>;
}
