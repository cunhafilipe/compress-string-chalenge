export class DecompressStringUseCase {
  async execute(
    dataArray: { compressedStr: string; percentage: string }[],
  ): Promise<string[]> {
    const compressData = [];

    for (const data of dataArray) {
      if (data && data.compressedStr) {
        const decompressedStr = await this.decompress(data.compressedStr);
        compressData.push(decompressedStr);
      }
    }
    return compressData;
  }

  private async decompress(compressedStr: string): Promise<string> {
    let decompressedStr = '';
    let i = 0;

    while (i < compressedStr.length) {
      const char = compressedStr[i];
      i++;

      let countStr = '';
      while (i < compressedStr.length && /\d/.test(compressedStr[i])) {
        countStr += compressedStr[i];
        i++;
      }

      const count = parseInt(countStr, 10);

      for (let s = 0; s < count; s++) {
        decompressedStr += char;
      }
    }

    return decompressedStr;
  }
}
