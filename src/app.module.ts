import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Saudacao } from './saudacao.controller';
import { PersonalModule } from './personal/personal.module';
import { APP_FILTER } from '@nestjs/core';
// import { HttpFilter } from './personal/exceptions.filters';
import { DatabaseModule } from './database/database.module';
import { AulaModule } from './aula/aula.module';
import { databases } from './database/database.providers';
import { repoAulas } from './aula/aula.provider';
import { repoPersonal } from './personal/personal.provider';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [DatabaseModule, AulaModule, PersonalModule, BackofficeModule],
  controllers: [AppController, Saudacao],
  providers: [
    ...databases, ...repoAulas, ...repoPersonal,
  //   {
  //   provide: APP_FILTER,
  //   useClass: HttpFilter
  // }, 
  AppService],
})

export class AppModule {}
