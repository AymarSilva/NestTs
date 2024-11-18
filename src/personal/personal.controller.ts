import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { Personal } from './personal';
import { Response } from 'express';
import { IsNotEmpty } from 'class-validator';
import { PersonalTable } from './personalInterface.entity';
// import { Validations } from './validations/validationsController';

@Controller('personal')
export class PersonalController {
  constructor(private readonly service: PersonalService) {}
  // validation = new Validations();

  @Get('/all')
  async allPersonals(@Res() res: Response) {
    try {
      const [statusCode, personals] = await this.service.getAll();
      return res.status(statusCode).json(personals);
    } catch (error) {
      throw new InternalServerErrorException({ Erro: `Erro getAll: ${error}` });
    }
  }

  @Get()
  async getPersonal(@Query('nome') nome: string) {
    // this.validation.validateFilter(nome);
    try {
      return await this.service.getFilterNome(nome);
    } catch (error) {
      throw new InternalServerErrorException({ Erro: `Erro getAll: ${error}` });
    }
  }

  @Get(':id')
  async getPersonalID(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.service.getOne(id);
    } catch (error) {
      throw new InternalServerErrorException(`Erro na API: ${error}`);
    }
  }

  @Post()
  async postPersonal(@Body(new ValidationPipe()) personal: Personal) {
    // this.validation.fieldFulfilled(personal);
    try {
      return await this.service.postarPersonal(personal);
    } catch (error) {
      throw new InternalServerErrorException(`Erro na API: ${error}`);
    }
  }

  @Put(':id')
  async updatePersonal(
    @Param('id', ParseIntPipe) id: number,
    @Body() newPersonal: Personal,
  ) {
    try {
      return await this.service.putPersonal(id, newPersonal);
    } catch (error) {
      throw new InternalServerErrorException(`Erro na API: ${error}`);
    }
  }

  @Delete(':id')
  async deletePersonal(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.service.removePersonal(id);
    } catch (error) {
      throw new InternalServerErrorException(`Erro na API: ${error}`);
    }
  }
}
