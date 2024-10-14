import { AppConfigService } from '@app/config/appconfig.service';
import coreBootstrap from '@app/core/bootstrap';
import AppLogger from '@app/core/logger/app-logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { messageFactory, messages } from './shared';

async function bootstrap() {
	const app = await NestFactory.create(AppModule),
		configObj = app.get(AppConfigService),
		logger = app.get(AppLogger),
		appConfig = configObj.get('app'),
		{ port } = appConfig;

	/*start the server */
	try {
		/* core bootstrap config, environment, pipe, guards, intereceptors etc...*/
		coreBootstrap(app);
		await app.listen(port, async () => {
			const successMsg = messageFactory(messages.S1, [await app.getUrl()]);
			logger.log(successMsg, 200);
		});
	} catch (err) {
		const errMsg = messageFactory(messages.E1, [err.message]);
		logger.error(errMsg, 500);
	}
}

bootstrap();
