import { Injectable } from "@angular/core";

@Injectable()

export class Canzone{

    constructor(
        public nome_canzone : string, 
        public artista_canzone : string,
        public url_canzone : string
    ){}
}