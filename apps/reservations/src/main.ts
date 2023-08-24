import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import {Logger} from 'nestjs-pino'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')
  await app.listen(PORT);
  console.log(`Reservation Service is running on port ${PORT}`)
}
bootstrap();
