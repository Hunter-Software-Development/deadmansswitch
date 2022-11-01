import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

/**
 * Bootstrap
 *
 * Kicks off nest server - middleware goes here.
 *
 * Currently **helmet** only runs on prod so cors doesn't kill apollo's gql viewer.
 *
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }
  await app.listen(process.env.PORT || 3030);
}
bootstrap();
