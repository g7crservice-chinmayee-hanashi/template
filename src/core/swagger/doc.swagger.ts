import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
export const setupSwagger = (app: INestApplication) => {
	const config = new DocumentBuilder().setTitle('TEMPLATE-API').setVersion('1.0').addBearerAuth().build(),
		swaggerDoc = SwaggerModule.createDocument(app, config),
		customOptions: SwaggerCustomOptions = {
			customSiteTitle: 'TEMPLATE',
			customCss: '.swagger-ui .topbar { background-color: #ffffff; border-bottom: 5px solid #3f51b5; }'
		};
	SwaggerModule.setup('api/docs/swagger', app, swaggerDoc, customOptions);
	writeFileSync('./template-api-swagger-spec.json', JSON.stringify(swaggerDoc));
};
