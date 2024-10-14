import { AppResponse, createResponse } from '@app/shared/appresponse.shared';
import { messageFactory, messages } from '@app/shared/messages.shared';
import { Body, Controller, Get, Headers, HttpStatus, Post, Req } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AbstractAuthSvc } from './auth.abstract';
import { Authorize } from '@app/core/decorators/authorization.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
	constructor(private readonly _authSvc: AbstractAuthSvc) {}

	//#region hello world
	// @Authorize()
	@Get()
	helloWorld(): Promise<AppResponse> {
		return this._authSvc.helloWorldSvc();
	}
	//#endregion
}
