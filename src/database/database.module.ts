import { Module } from '@nestjs/common';
import { databases } from './database.providers';

@Module({
    providers: [...databases],
    exports: [...databases]
})
export class DatabaseModule {}
