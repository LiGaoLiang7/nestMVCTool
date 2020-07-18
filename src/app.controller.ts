// controller就是传统意义上的控制器，提供api接口 仅接收请求在合适的地方调用service
import { Controller, Get, Query, Post, Body, Param, HttpStatus, Header, Response, HttpCode, UsePipes} from '@nestjs/common';
// 引入App serverce
import { AppService } from './app.service';
import { WorldDTO } from './data.world'
import { PlatformDTOValidationPipe } from './shared/pipes/PlatformDTOValidationPipe'
// import { CatsService } from './cat.service';

@Controller('hello')
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
  getHello() {
    return this.appService.getworld();
  }
  @Get('class/:id')
  getClass(@Response() res, @Param('id') id): string{
    return res.status(HttpStatus.OK).json("hello world adasd12 " + id)
  }

  @Get('query')
  queryList(@Query() query): string{
    // @Query()会把Query String解析成javascript对象
    console.log(JSON.stringify(query))
    return query
  }
  // 通过body传递数据
  @Post('add')
  @UsePipes(PlatformDTOValidationPipe) // 过滤管道
  create(@Body() worldDTO: WorldDTO){
    return `平台:${worldDTO.name}建立`;
  }

}