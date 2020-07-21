import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';
import { PhotoDTO } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  // 增加数据实例方法
  async addPhoto(data : PhotoDTO){
    const photo = new Photo();
    photo.name = data.name;
    photo.description = data.description;
    photo.filename = data.filename;
    photo.views = data.views;
    photo.isPublished = data.isPublished;
    return await this.photoRepository.save(photo);    
  }
}