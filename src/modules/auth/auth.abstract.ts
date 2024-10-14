import { AppResponse } from '@app/shared/appresponse.shared';

export abstract class AbstractAuthSvc {
	abstract helloWorldSvc(): Promise<AppResponse>;
}
