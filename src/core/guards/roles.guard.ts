import { DecoratorConstant } from '@app/core/constants/decorator.constant';
import { messageFactory, messages } from '@app/shared';
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<string[]>(DecoratorConstant.HAS_ROLES, context.getHandler());

		/*If API is not authorized return true always*/
		if (!roles || !roles.length) {
			return true;
		}

		const req = context.switchToHttp().getRequest();

		if (!req.claims.roles || !req.claims.roles.some((r: string) => roles.includes(r.toUpperCase()))) {
			throw new HttpException(messageFactory(messages.E8, [req.url]), HttpStatus.FORBIDDEN);
		}

		return true;
	}
}
