// data transfer Object
import { IsString, Length } from 'class-validator';
import { isNumber } from 'util';
export class PhotoDTO{
    id: number;
    @IsString()
    @Length(0,20,{
        message: '长度需要小于20'
    })
    name: string;
    @IsString()
    description: string;
    @IsString()
    filename: string;
    views: number;
    isPublished: boolean;
}