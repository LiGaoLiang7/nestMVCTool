import { Module } from '@nestjs/common';
import { PlatformDTOValidationPipe } from './pipes/PlatformDTOValidationPipe';

@Module({
    providers: [
        PlatformDTOValidationPipe,
    ],
})
export class SharedModule {}