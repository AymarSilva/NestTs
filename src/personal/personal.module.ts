import { Module } from '@nestjs/common';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonalSchema } from './personal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '123*abc',
      database: 'riit',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PersonalSchema])
  ],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
