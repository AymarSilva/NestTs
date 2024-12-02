import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Administrador } from "src/administrador.entity";
import { Usuario } from "src/usuario.entity";

@Entity('registroBan')
export class Backoffice_registroBan {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    // @OneToOne(() => Administrador)
    // @JoinColumn({ name: "administradorId" })
    administradorId: number;

    @Column()
    @IsNotEmpty()
    motivo: string;

    @Column({ nullable: true })
    tempoBan: number;

    @Column({ type: "timestamptz" })
    createdAt: Date;

    @Column({ type: "timestamptz" })
    deletedAt: Date;

    @Column()
    // @OneToOne(() => Usuario)
    // @JoinColumn({ name: "usuarioId" })
    usuarioId: number;

    getCreatedAt(){
        
    };
}
