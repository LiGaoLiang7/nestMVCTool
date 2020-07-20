// module是controller和provider的集合，类似于namespace的概念，支持module内部controller和provider的注入互相关联
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module'; // 验证入参DTO属性
import { TypeOrmModule } from '@nestjs/typeorm';   // 数据库 typeORM
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity'
// Controller和Provider相关联呢
// Module是个namespace或是scope的概念，是一系列Controller和Provider的方法集，也可以看成一种应用的组织形式。在Module内部，nest实现了注入关联
// 我们需要将这些 Service 注册到 Nest 上，这样就可以让 Nest 帮你完成注入操作
@Module({
  imports: [SharedModule, PhotoModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "123456",
    database: "orm_test",
    entities: [Photo], // photo实体
    synchronize: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}