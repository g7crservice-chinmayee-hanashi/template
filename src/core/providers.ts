import { AppConfigService } from '@app/config/appconfig.service';
import { DatabaseModule } from '@app/database/database.module';
// import { AbstractAuthSvc } from '@app/modules/auth/auth.abstract';
// import { AuthService } from '@app/modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/authorization.guard';
import AppLogger from './logger/app-logger';
import { RolesGuard } from './guards/roles.guard';
import { AbstractAuthSvc } from '@app/modules/auth/auth.abstract';
import { AuthService } from '@app/modules/auth/auth.service';

const getProviders = (): any[] => {
		return [
			AppConfigService,
			AppLogger,
			{ provide: AbstractAuthSvc, useClass: AuthService },
			{ provide: APP_GUARD, useClass: AuthGuard },
			{ provide: APP_GUARD, useClass: RolesGuard },
			JwtService
		];
	},
	importProviders = (): any[] => {
		return [ConfigModule.forRoot({ envFilePath: '.env.development' }), DatabaseModule];
	},
	exportProviders = (): any[] => {
		return [AppConfigService, AppLogger, DatabaseModule,{ provide: AbstractAuthSvc, useClass: AuthService }, JwtService];
	};

export { exportProviders, getProviders, importProviders };
