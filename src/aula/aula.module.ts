import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { DatabaseModule } from 'src/database/database.module';
import { repoAulas } from './aula.provider';
import { AulaController } from './aula.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AulaService, ...repoAulas],
  controllers: [AulaController]
})

export class AulaModule {}