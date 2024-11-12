import { BadRequestException } from "@nestjs/common";
import { Personal } from "../personal";

export class Validations {

    fieldFulfilled(personal: Personal){
        const campos = [
            'nome','email'
        ];

        const emptyField = campos.some(campo => {
            const isEmpty = personal[campo].trim() == '' ||
            personal[campo] == undefined ||
            personal[campo] == null ?
            true : false

            return isEmpty;
        });
        if (emptyField) {
            throw new BadRequestException("Campos nome e email obrigatórios");
        };
    };

    validateFilter(nome: string){
        if (nome.trim() == '') {
            throw new BadRequestException("Nome não inserido");
        }
        else if (Number(nome)) {
          throw new BadRequestException("Filtro não é um nome");  
        };
    };
}