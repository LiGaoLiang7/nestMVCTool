// controller就是传统意义上的控制器，提供api接口 仅接收请求在合适的地方调用service
import { Controller, Post, Body, UsePipes} from '@nestjs/common';
import { PhotoDTO } from './photo.dto'
import { PhotoService } from './photo.service';
import { PlatformDTOValidationPipe } from '../shared/pipes/PlatformDTOValidationPipe'

// import { CatsService } from './cat.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('add')
  @UsePipes(PlatformDTOValidationPipe) // 过滤管道
  async create(@Body() photoDTO: PhotoDTO){
    // throw new HttpException('糟糕!您的要求有问题，请联系管理员', HttpStatus.BAD_REQUEST);
    return this.photoService.addPhoto(photoDTO)
  }

}