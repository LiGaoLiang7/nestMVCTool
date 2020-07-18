// module是controller和provider的集合，类似于namespace的概念，支持module内部controller和provider的注入互相关联
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';

// Controller和Provider相关联呢
// Module是个namespace或是scope的概念，是一系列Controller和Provider的方法集，也可以看成一种应用的组织形式。在Module内部，nest实现了注入关联
// 我们需要将这些 Service 注册到 Nest 上，这样就可以让 Nest 帮你完成注入操作
@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
