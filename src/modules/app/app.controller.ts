import { AppResponse } from '@app/shared';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Status')
@Controller()
export class AppController {
	constructor(private readonly _appService: AppService) {}

	@Get('healthz')
	Healthz(@Query('checkDatabase') checkDatabase?: boolean): Promise<AppResponse> {
		return this._appService.healthz(Boolean(checkDatabase));
	}
	
}
