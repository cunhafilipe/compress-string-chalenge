import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Neo Pro Test')
    .setDescription('Compress and decompress strings.')
    .setVersion('1.0')
    .addTag('endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
