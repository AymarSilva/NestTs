import { Body, Controller, Delete, Get, InternalServerErrorException, Param, ParseIntPipe, Post, Put, Query, UseFilters, ValidationPipe } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { Personal } from './personal';
import { IsNotEmpty } from 'class-validator';
// import { Validations } from './validations/validationsController';

@Controller('personal')
export class PersonalController {

    constructor(private readonly service: PersonalService){};
    // validation = new Validations();

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
        // this.validation.validateFilter(nome);
        try {
            return this.service.getFilterNome(nome);  
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Get(':id')
    getPersonalID(@Param('id', ParseIntPipe) id: number){
        try {
            return this.service.getOne(id);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        }
    };

    @Post()
    postPersonal(@Body(new ValidationPipe()) personal: Personal){
        // this.validation.fieldFulfilled(personal);
        try {
            return this.service.postarPersonal(personal);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Put(':id')
    updatePersonal(@Param('id', ParseIntPipe) id: number,
    @Body() newPersonal: Personal){
        try {
            return this.service.putPersonal(id, newPersonal);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };
    };

    @Delete(':id')
    deletePersonal(@Param('id', ParseIntPipe) id: number){
        try {
            return this.service.removePersonal(id);
        } catch (error) {
            throw new InternalServerErrorException(`Erro na API: ${error}`);
        };

    };
};
