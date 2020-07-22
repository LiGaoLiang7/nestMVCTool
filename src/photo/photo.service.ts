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
  
  async findAllPhoto(): Promise<Photo[]> {
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
  // 获取实例list方法
  async getPhoto(): Promise <Photo []>{
    return await this.photoRepository.find(); // 没有传入参数代表获取全部
  }
  // 按照id查询
  async getPhotoById(id):Promise <Photo>{
    return await this.photoRepository.findOne(id);
  }
  // 更新
  async upDatePhoto(id, data: PhotoDTO){
    return await this.photoRepository.update(id, data); // 用data里的值更新到资料库
  }
  // 删除
  async deletePhoto(id){
    return await this.photoRepository.delete(id);
  }

}