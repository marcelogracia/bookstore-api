import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefijo para peticiones
  app.setGlobalPrefix('api');

  await app.listen(AppModule.port);
}
bootstrap();
