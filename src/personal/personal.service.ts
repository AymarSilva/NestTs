import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonalService {

 db = [
    {id: 0, nome: "Aymar", email: "aymar.estagio.riit@gmail.com"},
    {id: 1, nome: "Souhlila", email: "souhlila.gestora@riit.com"},
    {id: 2, nome: "Samuel", email: "samuel.estagio.riit@gmail.com"}
 ];

 getPersonals(){
   return this.db;
 };

 getFilterNome(nome: string){
   if (nome) {
      return this.db.filter(each => each.nome === nome);
   };
 };

 getFilterId(id: number){
    return this.db.filter(each => each.id === id);
 };

 postarPersonal(body : any){
    this.db.push(body);
    return "Personal Criado"
 };

 delPersonal(id: number) {
    this.db = this.db.filter(each => each.id !== id);
    return "Personal deletado";
  };
  
 putPersonal(id: number, body: any){
    const index = this.db.findIndex(each => each.id === id);
    
    this.db[index] = {
        id: id,
        nome: body.nome,
        email: body.email
    };

    return "Personal Atualizado";
 };

};
