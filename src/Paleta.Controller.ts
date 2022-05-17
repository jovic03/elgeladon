import { Controller, Get } from "@nestjs/common";
import {PaletaService} from './Paleta.Service'

@Controller('paletas')//sempre que for usar tem que chamar
export class PaletaController {

    constructor(private paletaService: PaletaService){}//isso é um constructor poderia ser constructor(){}

    @Get()
    findAll(): string[]{
        return this.paletaService.findAll();
    }
}