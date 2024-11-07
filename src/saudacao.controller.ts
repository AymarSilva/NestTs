import { Controller, Get } from "@nestjs/common";

@Controller()
export class Saudacao{
    @Get("/saudacao/ola")
    hello() : string {
        return "olá";
    };

    @Get("/saudacao")
    saudacao() : String{
    const objeto: Record<string, string> = {
      Ola: "Ola",
      saud: "td bem"
    };
    return JSON.stringify(objeto);

    
  };
}