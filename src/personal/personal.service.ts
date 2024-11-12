import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { PersonalSchema } from './personal.entity';
import { PersonalTable } from './personalInterface.entity';

@Injectable()
export class PersonalService {

   constructor(
      @InjectRepository(PersonalTable)
      private personalTable: Repository<PersonalTable>
   ){};

   // Get all Personals from database
   getAll(): Promise<PersonalTable[]>{
      return this.personalTable.find();
   };

   // Get only one Personal from database
   async getOne(id: number): Promise<PersonalTable>{
      const personal = await this.personalTable.findOneBy({id});
      if (!personal) {
         throw new NotFoundException("ID Inexistente");
      };
      return personal;
   };

   async removePersonal(id: number): Promise<Object> {
      await this.personalTable.delete(id);
      return {message: `Personal ${id} deletado`};
   };

//  db = [
//     {id: 0, nome: "Aymar", email: "aymar.estagio.riit@gmail.com"},
//     {id: 1, nome: "Souheila", email: "souhlila.gestora@riit.com"},
//     {id: 2, nome: "Samuel", email: "samuel.estagio.riit@gmail.com"}
//  ];

//  getPersonals(){
//    return this.db;
//  };

 async getFilterNome(nome: string){
   const consulta = await this.personalTable.findBy({ nome });
   if (consulta.length < 1) {
      throw new NotFoundException("Nome inexistente");
   };
   return consulta;
 };

//  getFilterId(id: number){
//     return this.db.filter(each => each.id === id);
//  };

 postarPersonal(body : any){
    this.personalTable.save(body);
    return {message: "Personal Criado"};
 };
  
 async putPersonal(id: number, body: any){
   const personal = await this.personalTable.update(id,body);
   if (personal.affected !== 1) {
     throw new NotFoundException("Personal nao existe"); 
   };

   return {message: `Personal ${id} Atualizado`};
 };

};