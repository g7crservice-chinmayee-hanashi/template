import { CoreModule } from '@app/core/core.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { EventHubModule } from '../../core/event-hub/event-hub.module';

@Module({
	imports: [CoreModule,AuthModule, EventHubModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
