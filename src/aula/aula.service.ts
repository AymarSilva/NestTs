import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aulas } from './aula.entity';
import { representar } from './aula.resource';

@Injectable()
export class AulaService {

    static DUR_AULA_HORAS = 2;

    constructor(
        @Inject('AULA_REPO')
        private readonly repAula: Repository<Aulas>
    ){};

    async listarAula(): Promise<[number, object]>{
        const aulas = await this.repAula.find();
        return [HttpStatus.OK, aulas.map(representar)];
    };

    async criarAula(newAula: Aulas): Promise<[number,Object]>{
        const alreadyExist = await this.repAula.findOneBy({
            nome: newAula.nome
        });

        if (alreadyExist) {
          return [HttpStatus.CONFLICT, { message: `Aula já existe` }];  
        };

        await this.repAula.save(newAula);
        return [HttpStatus.CREATED, { message: `Aula Criada` }];
    };

    async findAulaByID(id: number): Promise<Aulas>{
        return await this.repAula.findOneBy({
            id: id
        });
    };

    async iniciarAula(
        aula: Aulas,
        tempo: number = AulaService.DUR_AULA_HORAS)
        : Promise<[number,boolean]> {

        aula.dataInicio = new Date();
        aula.dataFim = new Date( aula.dataInicio.getTime() + tempo * 3600 * 1000);

        await this.repAula.update(aula.id, aula);

        return [200, true];
    };
};