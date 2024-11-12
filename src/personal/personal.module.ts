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
      host: 'localhost',
      username: 'postgres',
      password: '123*abc',
      database: 'riit',
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
