// controller就是传统意义上的控制器，提供api接口 仅接收请求在合适的地方调用service
import { Controller } from '@nestjs/common';
// 引入App serverce
import { PhotoService } from './photo.service';
// import { CatsService } from './cat.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
}