import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from 'nestjs-pino'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useLogger(app.get(Logger))
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')
  await app.listen(PORT);
  console.log(`Auth service is running on port ${PORT}`)
}
bootstrap();
