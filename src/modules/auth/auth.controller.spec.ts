import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppModule } from '../app/app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { createResponse, messageFactory, messages } from '@app/shared';

// describe('AuthController', () => {
// 	let authController: AuthController;
// 	let authService: AuthService;
// 	beforeEach(async () => {
// 		const moduleRef: TestingModule = await Test.createTestingModule({
// 			imports: [AppModule],
// 			providers: [AuthService]
// 		}).compile();
// 		authController = moduleRef.get<AuthController>(AuthController);
// 		authService = moduleRef.get<AuthService>(AuthService);
// 	});

// 	describe('userLogin', () => {
// 		const req = { headers: { 'user-agent': 'user-agent' } };
// 		const header = {
// 			'content-type': 'application/x-www-form-urlencoded'
// 		};

// 		it('should return error if userName is empty', async () => {
// 			const signInCred = { userName: '', password: Buffer.from('password123').toString('base64') };
// 			// Mock service behavior directly inside the controller
// 			authService.userLogin = jest.fn().mockImplementation(async () => {
// 				return {
// 					code: HttpStatus.BAD_REQUEST,
// 					message: messageFactory(messages.W2, ['Username'])
// 				};
// 			});

// 			const validationPipe = new ValidationPipe();
// 			let result;
// 			try {
// 				await validationPipe.transform(signInCred, {
// 					type: 'body',
// 					metatype: LoginDto
// 				});

// 				result = await authController.userLogin(req, header, signInCred);
// 			} catch (error) {
// 				result = error.getResponse();
// 				if (Array.isArray(result.message)) {
// 					result.message = result.message.join(', ');
// 				}
// 				// Rename statusCode to code and deleting the error
// 				if ('statusCode' in result) {
// 					result.code = result.statusCode;
// 					delete result.statusCode;
// 				}
// 				if ('error' in result) {
// 					delete result.error;
// 				}
// 			}
// 			expect(result).toEqual({
// 				code: HttpStatus.BAD_REQUEST,
// 				message: messageFactory(messages.W2, ['Username'])
// 			});
// 		});

// 		it('should return an error if password is empty', async () => {
// 			const signInCred = { userName: Buffer.from('user1').toString('base64'), password: '' };
// 			authService.userLogin = jest.fn().mockImplementation(async () => {
// 				return {
// 					code: HttpStatus.BAD_REQUEST,
// 					message: messageFactory(messages.W2, ['Password'])
// 				};
// 			});

// 			const validationPipe = new ValidationPipe();
// 			let result;
// 			try {
// 				await validationPipe.transform(signInCred, {
// 					type: 'body',
// 					metatype: LoginDto
// 				});
// 				result = await authController.userLogin(req, header, signInCred);
// 			} catch (error) {
// 				result = error.getResponse();
// 				if (Array.isArray(result.message)) {
// 					result.message = result.message.join(', ');
// 				}
// 				// Rename statusCode to code and deleting the error
// 				if ('statusCode' in result) {
// 					result.code = result.statusCode;
// 					delete result.statusCode;
// 				}
// 				if ('error' in result) {
// 					delete result.error;
// 				}
// 			}
// 			expect(result).toEqual({
// 				code: HttpStatus.BAD_REQUEST,
// 				message: messageFactory(messages.W2, ['Password'])
// 			});
// 		});

// 		it('should throw an error if userName is not a valid base64 string', async () => {
// 			const invalidBase64UserName = 'user123';
// 			const base64Password = Buffer.from('password123').toString('base64');
// 			const signInCred: any = {
// 				userName: invalidBase64UserName,
// 				password: base64Password
// 			};
// 			authService.userLogin = jest.fn().mockImplementation(async () => {
// 				return {
// 					code: HttpStatus.BAD_REQUEST,
// 					message: messages.W6
// 				};
// 			});

// 			const validationPipe = new ValidationPipe();
// 			let result;
// 			try {
// 				await validationPipe.transform(signInCred, {
// 					type: 'body',
// 					metatype: LoginDto
// 				});

// 				result = await authController.userLogin(req, header, signInCred);
// 			} catch (error) {
// 				result = error.getResponse();
// 				if (Array.isArray(result.message)) {
// 					result.message = result.message.join(', ');
// 				}
// 				// Rename statusCode to code and deleting the error
// 				if ('statusCode' in result) {
// 					result.code = result.statusCode;
// 					delete result.statusCode;
// 				}
// 				if ('error' in result) {
// 					delete result.error;
// 				}
// 			}
// 			expect(result).toEqual({
// 				code: HttpStatus.BAD_REQUEST,
// 				message: messages.W6
// 			});
// 		});

// 		it('should throw an error if password is not a valid base64 string', async () => {
// 			const base64UserName = Buffer.from('user123').toString('base64');
// 			const invalidBase64Password = 'password123';

// 			const signInCred: any = {
// 				userName: base64UserName,
// 				password: invalidBase64Password
// 			};
// 			authService.userLogin = jest.fn().mockImplementation(async () => {
// 				return {
// 					code: HttpStatus.BAD_REQUEST,
// 					message: messages.W6
// 				};
// 			});
// 			const validationPipe = new ValidationPipe();
// 			let result;
// 			try {
// 				await validationPipe.transform(signInCred, {
// 					type: 'body',
// 					metatype: LoginDto
// 				});

// 				result = await authController.userLogin(req, header, signInCred);
// 			} catch (error) {
// 				result = error.getResponse();
// 				if (Array.isArray(result.message)) {
// 					result.message = result.message.join(', ');
// 				}
// 				// Rename statusCode to code and deleting the error
// 				if ('statusCode' in result) {
// 					result.code = result.statusCode;
// 					delete result.statusCode;
// 				}
// 				if ('error' in result) {
// 					delete result.error;
// 				}
// 			}
// 			expect(result).toEqual({
// 				code: HttpStatus.BAD_REQUEST,
// 				message: messages.W6
// 			});
// 		});

// 		it('should return error if user is inactive', async () => {
// 			const signInInfo: any = {
// 				userName: 'rajendra.p@g7cr.com',
// 				password: 'g7cr@123'
// 			};

// 			const mockResponse = createResponse(HttpStatus.BAD_REQUEST, messages.W4);
// 			const result = await authService.userLogin(signInInfo);
// 			expect(result).toEqual(mockResponse);
// 			expect(result.code).toEqual(HttpStatus.BAD_REQUEST);
// 			expect(result).toEqual(createResponse(HttpStatus.BAD_REQUEST, messages.W4));
// 		}, 20000);
// 	});
// });
