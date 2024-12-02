import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Backoffice_registroBan } from './backoffice.entity';
import { Repository } from 'typeorm';
import { BanStructure } from './resources/registroBan.resource';

@Injectable()
export class BackofficeService {
    constructor(
        @Inject('Backoffice_REPO')
        private readonly repBan: Repository<Backoffice_registroBan>
    ){}

    async verRegistros(): Promise<[number,Object]>{
        const registros = await this.repBan.find();
        return [HttpStatus.OK, registros]
    };

    async criarRegistro(newBan: Object): Promise<[number,Object]>{
        const BanStructured = await BanStructure(newBan);
        await this.repBan.save(BanStructured);
        return [HttpStatus.CREATED, { message: 'Registro ban criado', status: HttpStatus.OK }];
    };
}
