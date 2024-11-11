import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Query, UseFilters } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { Personal } from './personal';
import { Validations } from './validations/validationsController';

@Controller('personal')
export class PersonalController {

    constructor(private readonly service: PersonalService){};
    validation = new Validations();

    @Get('/all')
    allPersonals(){
        try {
            return this.service.getAll();
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        }
    };

    @Get()
    getPersonal(@Query('nome') nome: string){
        this.validation.validateFilter(nome);
        try {
            return this.service.getFilterNome(nome);  
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Get(':id')
    getPersonalID(@Param('id') id: string){
        this.validation.validateId(id);
        try {
            return this.service.getFilterId(+id);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        }
        
    };

    @Post()
    postPersonal(@Body() personal: Personal){
        this.validation.fieldFulfilled(personal);
        try {
            return this.service.postarPersonal(personal);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Put(':id')
    updatePersonal(@Param('id') id: string, @Body() newPersonal: Personal){
        this.validation.validateId(id);
        try {
            return this.service.putPersonal(+id, newPersonal);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Delete(':id')
    deletePersonal(@Param('id') id: string){
        this.validation.validateId(id);
        try {
            return this.service.delPersonal(+id);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };

    };
}
