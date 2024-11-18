import { Module } from '@nestjs/common';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonalTable } from './personalInterface.entity';
import { DatabaseModule } from 'src/database/database.module';
import { repoPersonal } from './personal.provider';

@Module({
  imports: [DatabaseModule
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST || 'localhost',
    //   username: process.env.DB_USER || 'postgres',
    //   password: process.env.DB_PASSWORD || '123*abc',
    //   database: process.env.DB_NAME || 'riit',
    //   autoLoadEntities: true,
    //   // synchronize: true,
    // }),
    // TypeOrmModule.forFeature(PersonalTable)
  ],
  controllers: [PersonalController],
  providers: [PersonalService, ...repoPersonal]
})
export class PersonalModule {};
