import { EntitySchema } from "typeorm";

interface PersonalSchema{
    id: number,
    nome: string,
    email: string
};

export const PersonalSchema = new EntitySchema<PersonalSchema>({
    name: 'User',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
            nullable: true
        },
        nome: {
            type: String,
            /*
            The two lines below have been used in order to
            serve as sample to like try it out
            */
            nullable: true,
            default: 'S/N'
        },
        email: {
            type: String
        }
    }
});