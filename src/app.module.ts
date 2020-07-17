// module是controller和provider的集合，类似于namespace的概念，支持module内部controller和provider的注入互相关联
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Controller和Provider相关联呢
// Module是个namespace或是scope的概念，是一系列Controller和Provider的方法集，也可以看成一种应用的组织形式。在Module内部，nest实现了注入关联
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
