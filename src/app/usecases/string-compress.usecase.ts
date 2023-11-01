import { BadRequestException } from '@nestjs/common';
import axios from 'axios';

export class CompressStringUseCase {
  async execute(): Promise<any> {
    const url = 'https://api.neopro.com.br/v1/test/compact';
    const response = await axios.get(url);

    if (!response) {
      throw new BadRequestException('String not found');
    }

    const compress = response.data.string;

    let compressedStr = '';
    let count = 0;

    for (let i = 0; i < compress.length; i++) {
      count++;
      if (compress[i] != compress[i + 1]) {
        compressedStr = compressedStr + compress[i] + count;
      }
    }
    const percentage = ((compressedStr.length / compress.length) * 100).toFixed(
      0,
    );

    return { compressedStr, percentage };
  }
}
