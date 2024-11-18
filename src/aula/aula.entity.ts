import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('aulas')
export class Aulas{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    @IsNotEmpty()
    nome: string;

    @Column({ nullable: true ,type: "timestamptz" })
    dataInicio?: Date;

    @Column({ nullable: true, type: "timestamptz"  })
    dataFim?: Date;

    getStatus(): string{
        if (this.dataFim && this.dataFim < new Date()) {
          return StatusAula.ENCERRADA;  
        };
        if (this.dataInicio) {
            return StatusAula.INICIADA;
        };
        return StatusAula.NAO_INICIADA;
    };
};
enum StatusAula{
    NAO_INICIADA = 'Não iniciada',
    INICIADA = 'Iniciada',
    ENCERRADA = 'Encerrada'
};
