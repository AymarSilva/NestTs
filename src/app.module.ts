import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Saudacao } from './saudacao.controller';
import { PersonalModule } from './personal/personal.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpFilter } from './personal/exceptions.filters';

@Module({
  imports: [PersonalModule],
  controllers: [AppController, Saudacao],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpFilter
  }, AppService],
})

export class AppModule {}
