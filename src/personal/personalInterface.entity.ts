import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('personals')
export class PersonalTable {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;
};
