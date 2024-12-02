import { Backoffice_registroBan } from "../backoffice.entity";

export async function BanStructure(payload: any) {
    const { tempoBan } = payload;
    const createdAt = new Date();
    const deletedAt = new Date( createdAt.getTime() + tempoBan * 3600 * 1000);
    const administradorId = '1';
    payload.createdAt = createdAt;
    payload.deletedAt = deletedAt;
    payload.administradorId = administradorId;
    return await payload;
};

// export class BanStructure extends Backoffice_registroBan {
//     id?: number;
//     administradorId: number;
//     motivo: string;
//     tempoBan: number;
//     createdAt: Date;
//     deletedAt: Date;
//     usuarioId: number;

    

// }