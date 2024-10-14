import { Module } from '@nestjs/common';
import { EventHubService } from './event-hub.service';

@Module({
  imports: [],
  providers: [EventHubService],
  exports:[EventHubService]
})
export class EventHubModule {}
