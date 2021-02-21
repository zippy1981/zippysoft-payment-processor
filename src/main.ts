import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { Logger } from '@nestjs/common';

dotenv.config();

const logger = new Logger('bootstrap');

async function bootstrap() {
  await createConnection()
    .then(() => {
      logger.verbose('Connected to database');
    })
    .catch((e) => {
      logger.error('Error connecting to database', e);
    });
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
