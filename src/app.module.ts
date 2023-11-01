import { Module } from '@nestjs/common';
import { CompressStringUseCase } from 'src/app/usecases/string-compress.usecase';
import { DecompressStringUseCase } from 'src/app/usecases/string-decompress.usecase';
import { AppController } from './presentation/controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CompressStringUseCase, DecompressStringUseCase],
})
export class AppModule {
  CompressStringUseCase;
  DecompressStringUseCase;
}
