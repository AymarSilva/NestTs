import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Saudacao } from './saudacao.controller';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [PersonalModule],
  controllers: [AppController, Saudacao],
  providers: [AppService],
})

export class AppModule {}
