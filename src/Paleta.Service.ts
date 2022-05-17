import { Injectable } from "@nestjs/common";

export class Paleta {
    paletas: string[]=['Morango','Leite Condensado'];

    findAll(): string[]{
        return this.paletas;
    }
}