// service又称为Provider，是一系列服务、repo、工厂方法、helper的总称
import { Injectable } from '@nestjs/common';

@Injectable() // Nest就是利用一个叫@Injectable()的装饰器实现注入依赖
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getworld(): string {
    return JSON.stringify({
      msg : "你好吗",
      date : new Date()
    })
  }
}
