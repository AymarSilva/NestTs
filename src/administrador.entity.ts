import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrador')
export class Administrador {
    @PrimaryGeneratedColumn()
    id: number;
}
