import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AulaService } from './aula.service';
import { Aulas } from './aula.entity';
import { InicioAula } from './aula.resource';

@Controller('aulas')
export class AulaController {
  constructor(private readonly servAula: AulaService) {}

  @Get()
  async listarAula(@Res() res: Response) {
    try {
      const [statusCode, aulas] = await this.servAula.listarAula();
      res.status(statusCode).json(aulas);
    } catch (error) {
      throw new InternalServerErrorException({ erro: error });
    }
  }

  @Post()
  async PostarAula(@Body() newAula: Aulas, @Res() res: Response) {
    try {
      const [statusCode, novaAula]: [number, Object] =
        await this.servAula.criarAula(newAula);
      res.status(statusCode).json(novaAula);
    } catch (error) {
      throw new InternalServerErrorException({ erro: error });
    }
  }

  @Post(':id/iniciar')
  async InicioAula(
    @Param('id', ParseIntPipe) id: number,
    @Body() tempo: InicioAula,
    @Res() res: Response,
  ) {
    try {
      const aula: Aulas = await this.servAula.findAulaByID(id);
      if (!aula) {
        res.status(HttpStatus.NOT_FOUND).json({ message: 'Aula inexistente' });
      }
      const [statusCode, retorno]: [number, boolean] = await this.servAula.iniciarAula(
        aula,
        tempo.horas,
      );
      return res.status(statusCode).json(retorno);
    } catch (error) {
      throw new InternalServerErrorException({ erro: error });
    }
  }
}
