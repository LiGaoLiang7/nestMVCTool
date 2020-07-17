// controller就是传统意义上的控制器，提供api接口
import { Controller, Get, Post, Param, HttpStatus, Header, Response, HttpCode} from '@nestjs/common';
// 引入App serverce
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  // 构造器注入的方式
  constructor(private readonly appService: AppService) {}
  
  @Get('world')
  getHello(): string {
    return this.appService.getworld();
  }
  
  @Get('class/:id')
  getClass(@Response() res, @Param('id') id): string{
    return res.status(HttpStatus.OK).json("hello world ad " + id)
  }
  @Post('add')
  @Header('Cache-Control', 'none')
  create() {
    return 'This action adds a new cat';
  }
}