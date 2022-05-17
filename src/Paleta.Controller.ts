import { Controller, Get } from "@nestjs/common";

@Controller('paletas')//sempre que for usar tem que chamar
export class PaletaController {
    @Get()
    findAll(): string[]{
        return null;
    }
}