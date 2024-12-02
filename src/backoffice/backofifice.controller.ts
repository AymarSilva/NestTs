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
import { BackofficeService } from './backoffice.service';

@Controller('backoffice/ban')
export class BackOfficeController {

  constructor(private readonly servAula: BackofficeService) {}
//   static URL = '/BAN';

  @Get()
  async verBans(@Res() res: Response){
    try {
      const [statusCode, message]: [number, Object] =
        await this.servAula.verRegistros();
      res.status(statusCode).json(message);
    } catch (error) {
      throw new InternalServerErrorException({ erro: error });
    };
  };
  
  @Post()
  async PostarBan(@Body() newBan: Object, @Res() res: Response) {
    try {
      const [statusCode, message]: [number, Object] =
        await this.servAula.criarRegistro(newBan);
      res.status(statusCode).json(message);
    } catch (error) {
      throw new InternalServerErrorException({ erro: error });
    };
  };
};
