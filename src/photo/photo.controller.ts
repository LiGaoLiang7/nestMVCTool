// controller就是传统意义上的控制器，提供api接口 仅接收请求在合适的地方调用service
import { Controller, Post, Get, Query, Param, Put, Delete, Body, UsePipes} from '@nestjs/common';
import { PhotoDTO } from './photo.dto'
import { PhotoService } from './photo.service';
import { PlatformDTOValidationPipe } from '../shared/pipes/PlatformDTOValidationPipe'
import { get } from 'http';

// import { CatsService } from './cat.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  
  @Post('add')
  @UsePipes(PlatformDTOValidationPipe) // 过滤管道
  async create(@Body() photoDTO: PhotoDTO){
    return this.photoService.addPhoto(photoDTO);
  }

  @Get("findall")
  async photolist(){
    return this.photoService.getPhoto();
  }

  @Get(":id")
  queryList(@Param('id') id){
    return this.photoService.getPhotoById(id);
  }

  @Post('update/:id')
  updatePhotoById(@Param('id') id, @Body() photoDTO: PhotoDTO){
    return this.photoService.upDatePhoto(id, photoDTO);
  }

  @Delete(":id")
  deletePhotoById(@Param('id') id){
    return this.photoService.deletePhoto(id);
  }











}