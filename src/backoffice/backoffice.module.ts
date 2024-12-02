import { Module } from '@nestjs/common';
import { BackofficeService } from './backoffice.service';
import { DatabaseModule } from 'src/database/database.module';
import { repoBackoffice } from './backoffice.provider';
import { BackOfficeController } from './backofifice.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [BackOfficeController],
    providers: [BackofficeService, ...repoBackoffice]
})
export class BackofficeModule {}
