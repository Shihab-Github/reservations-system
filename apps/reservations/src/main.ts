import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  await app.listen(3000);
  console.log('Reservation Service is running on port 3000')
}
bootstrap();
