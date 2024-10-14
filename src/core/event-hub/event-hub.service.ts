import { AppResponse, createResponse, messages } from '@app/shared';
import { EventHubConsumerClient, EventHubProducerClient } from '@azure/event-hubs';
import { HttpStatus, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EventHubService  {
  private readonly producerClient: EventHubProducerClient;
  private readonly consumerClient: EventHubConsumerClient;
  private readonly logger = new Logger(EventHubService.name);
  constructor(
  ) {
    // Ensure the environment variables are correctly referenced
    const connectionString = process.env.EVENT_HUB_CONNECTION_STRING;
    const eventHubName = process.env.EVENT_HUB_NAME;
 
    // Check if the environment variables are defined
    if (!connectionString || !eventHubName) {
      this.logger.error('Event Hub connection string or event hub name is missing in environment variables.');
      throw new Error('Event Hub connection string or event hub name is missing in environment variables.');
    }

    // Initialize the EventHubProducerClient with the credentials from environment
    this.producerClient = new EventHubProducerClient(connectionString, eventHubName);
    this.consumerClient = new EventHubConsumerClient(
      EventHubConsumerClient.defaultConsumerGroupName,
      connectionString,
      eventHubName,
    );
  }

  async sendMessage(message: any): Promise<void> {
    try {
      const batch = await this.producerClient.createBatch();
      batch.tryAdd({ body: message });
      await this.producerClient.sendBatch(batch);
      this.logger.log('Message sent to Event Hub successfully');
    } catch (error) {
      this.logger.error('Error sending message to Event Hub', error);
    }
  }

    // Check Event Hub connection
    async checkConnection(): Promise<AppResponse> {
      try {
        const batch = await this.producerClient.createBatch();
        batch.tryAdd({ body: 'Connection test message' }); // Test message
        await this.producerClient.sendBatch(batch);
        return createResponse(HttpStatus.OK, messages.S5);
      } catch (error) {
        this.logger.error('Connection to Event Hub failed', error);
        return createResponse(HttpStatus.INTERNAL_SERVER_ERROR, messages.E3);
      }
    }
}
