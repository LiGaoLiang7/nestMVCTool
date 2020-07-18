// service又称为Provider，是一系列服务、repo、工厂方法、helper的总称
import { Injectable } from '@nestjs/common';
import { WorldDTO } from './data.world'
// Nest 有一个内置的 IOC 容器，用来解析 Providers 之间的关系。这个功能相对于 DI 来讲更底层，但是功能却异常强大，@Injectable() 只是冰山一角。事实上，你可以使用值，类和同步或者异步的工厂。
@Injectable() // Nest就是利用一个叫@Injectable()的装饰器实现注入依赖
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getworld() {
    let resWorld = new WorldDTO();
    resWorld.name = "Hello world!";
    resWorld.url = "http://xazdyl.com";
    return resWorld;
  }
}
