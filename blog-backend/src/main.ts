import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {

  // проверяю, заданы ли переменные для установки файла .___.env
  console.log(`The server is starting with process.env.NODE_ENV set to "${process.env.NODE_ENV}"`);
  const PORT = process.env.PORT || 3000;
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //const app = await NestFactory.create(AppModule);

  //app.use('/public', express.static(join(__dirname, '..', 'public')));
  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));
  console.log(join(__dirname, '..', 'public'));
  
  
  //app.useStaticAssets(join(__dirname, '..', 'public/admin'), {prefix: '/admin'});
  await app.listen(PORT, () => console.log(`The server has started at port: ${PORT}`));

}

bootstrap();
