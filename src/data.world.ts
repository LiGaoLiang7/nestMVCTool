// data transfer Object
import {IsUrl, IsString, Length } from 'class-validator';
export class WorldDTO{
    @IsString()
    @Length(0,10,{
        message: '长度需要小于10'
    })
    name : string;

    @IsUrl()
    url: string;
}