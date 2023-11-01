import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CompressStringUseCase } from 'src/app/usecases/string-compress.usecase';
import { DecompressStringUseCase } from 'src/app/usecases/string-decompress.usecase';

@Controller()
export class AppController {
  constructor(
    private readonly compressStringUseCase: CompressStringUseCase,
    private readonly decompressStringUseCase: DecompressStringUseCase,
  ) { }

  @Get('/compress-string')
  @ApiOperation({
    summary: 'Generate compressed strings',
    description: 'This endpoint generate compressed strings and percentage.',
  })
  async getCompressString(): Promise<any> {
    const compress = await this.compressStringUseCase.execute();
    return compress;
  }

  @Post('/decompress-string')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Decompress compressed strings',
    description:
      'This endpoint decompress strings that already had been compressed.',
  })
  async DecompressString(
    @Body() data: { compressedStr: string; percentage: string }[],
  ): Promise<any> {
    const decompress = await this.decompressStringUseCase.execute(data);
    return decompress;
  }
}
