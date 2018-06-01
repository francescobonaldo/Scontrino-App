import { Injectable } from "@angular/core";

@Injectable()

export class Risultato{

    risultato: string;
    descrizione: string;
    
    constructor(
        descrizione : string,
        risultato : string
    ){
        this.descrizione = descrizione;
        this.risultato = risultato;
    }
}