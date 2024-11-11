
import { Module } from '@nestjs/common';
import { PersonalModule } from './personal.module';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';

@Module({
  imports: [PersonalModule],
  providers: [PersonalService],
  controllers: [PersonalController]
})

export class UserHttpModule {}
