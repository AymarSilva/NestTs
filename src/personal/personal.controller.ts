import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { Personal } from './personal';

@Controller('personal')
export class PersonalController {
    service = new PersonalService();
    @Get()
    getPersonal(@Query('nome') nome: string){
        return this.service.getFilterNome(nome);
    };

    @Get(':id')
    getPersonalID(@Param('id') id: string){
        const idNumber = Number(id);
        return this.service.getFilterId(idNumber);
    };

    @Post()
    postPersonal(@Body() personal: Personal){
        return this.service.postarPersonal(personal);
    };

    @Put(':id')
    updatePersonal(@Param('id') id: string, @Body() newPersonal: Personal){
        const idNumber = Number(id);
        return this.service.putPersonal(idNumber, newPersonal);
    };

    @Delete(':id')
    deletePersonal(@Param('id') id: string){
        const idNumber = Number(id);
        return this.service.delPersonal(idNumber);
    };
}
