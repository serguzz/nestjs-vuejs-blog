import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // проверяю, заданы ли переменные для установки файла .___.env
  console.log(`The server is starting with process.env.NODE_ENV set to "${process.env.NODE_ENV}"`);
  const PORT = process.env.PORT || 3000;
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => console.log(`The server has started at port: ${PORT}`));

}

bootstrap();
