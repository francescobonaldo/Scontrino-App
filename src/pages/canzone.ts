import { Injectable } from "@angular/core";

@Injectable()

export class Canzone{

    nome_canzone : string
    artista_canzone : string
    url_canzone : string
    
    constructor(
        nome_canzone : string, 
        artista_canzone : string,
        url_canzone : string
    ){
        this.nome_canzone = nome_canzone 
        this.artista_canzone = artista_canzone
        this.url_canzone = url_canzone
    }
}