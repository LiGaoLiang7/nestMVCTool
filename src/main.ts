import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // NestFactory方法创建了这个nest应用
  const app = await NestFactory.create(AppModule);
  // 安装和使用swagger
  const options = new DocumentBuilder()
    .setTitle('设备管理')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
// 控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。
// 通常，每个控制器有多个路由，不同的路由可以执行不同的操作
// typescript flutter next.js


