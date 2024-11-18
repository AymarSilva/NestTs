import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Personal } from "./personal";

@Entity('personals')
export class PersonalTable implements Personal{
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nome: string;

    @Column()
    email: string;
};
