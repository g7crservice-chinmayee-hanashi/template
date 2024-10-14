import { corsOptions } from '@app/core/cors.config';
import AppLogger from '@app/core/logger/app-logger';
import { ErrorHandler, ResponseHandler } from '@app/core/middleware';
import { setupSwagger } from '@app/core/swagger/doc.swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import compression from 'compression';
import cors from 'cors';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

/**
 * Core bootstrap module should be loaded here.
 * @param app
 *
 */

export default function bootstrap(app: INestApplication) {
	// Global Prefix
	app.setGlobalPrefix('api');

	// middlewares, express specific\
	app.use(json({ limit: '50mb' }));
	app.use(urlencoded({ limit: '50mb', extended: true }));
	app.use(helmet());
	app.use(compression());

	// CORS configuration
	app.use(cors(corsOptions));

	// Auto-validation
	// We'll start by binding ValidationPipe at the application level, thus ensuring all endpoints are protected from receiving incorrect data.
	/*Global validation filters*/
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true
		})
	);

	// Bind Interceptors
	app.useGlobalInterceptors(new ResponseHandler());

	// Error Handler
	app.useGlobalFilters(new ErrorHandler(app.get(AppLogger)));

	//Swagger document
	setupSwagger(app);
}
