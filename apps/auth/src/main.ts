import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from 'nestjs-pino'

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(3001);
  app.useLogger(app.get(Logger))
  console.log('Auth service is running on port 3001')
}
bootstrap();
