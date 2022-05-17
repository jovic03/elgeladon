import { Injectable } from "@nestjs/common";

@Injectable()
export class PaletaService {
    paletas: string[]=['Morango','Leite Condensado'];

    findAll(): string[]{
        return this.paletas;
    }
}