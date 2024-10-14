import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigService } from '@app/config/appconfig.service';
import { messageFactory, messages } from '@app/shared';

describe('AppController', () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [
				AppService,
				AppConfigService,
				{
					provide: 'SEQUELIZE_PROVIDER',
					useValue: {
						authenticate: jest.fn().mockResolvedValue(true)
					}
				}
			]
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it(`should return ${messageFactory(messages.S1, ['8080'])}`, async () => {
			const expectedMessage = `${messageFactory(messages.S2, ['8080'])}`;
			const response = await appController.Healthz();
			expect(response.message).toBe(expectedMessage);
		});
	});
});
