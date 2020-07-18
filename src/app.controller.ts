// controller就是传统意义上的控制器，提供api接口 仅接收请求在合适的地方调用service
import { Controller, Get, Post, Param, HttpStatus, Header, Response, HttpCode} from '@nestjs/common';
// 引入App serverce
import { AppService } from './app.service';
// import { CatsService } from './cat.service';

@Controller('hello11')
export class AppController {
  // 构造器注入的方式
  // constructor(private readonly appService: AppService) {}
  // 等同于
  private readonly appService: AppService
  constructor(appService: AppService) {
    this.appService = appService
  }
  @Get('world')
  @Header('Cache-Control', 'none')
  getHello():string {
    return this.appService.getHello();
  }
  
  @Get('class/:id')
  getClass(@Response() res, @Param('id') id): string{
    return res.status(HttpStatus.OK).json("hello world adasd12 " + id)
  }
}