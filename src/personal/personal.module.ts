import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonalSchema } from './personal.entity';
import { PersonalTable } from './personalInterface.entity';
import { ApplicationConfig } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: String(process.env.DB_SENHA) || '123*abc',
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PersonalTable])
  ],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     apply()
  //   }
};
