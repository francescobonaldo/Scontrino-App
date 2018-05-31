import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//DA IMPORTARE MANUALMENTE
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


/*
  Generated class for the ScontrinoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScontrinoServiceProvider {

  url: string

  public data: any

  constructor(
    public http: Http
  ) {
    console.log('Hello ScontrinoServiceProvider Provider');
  }

  //Chiamata ajax con richiesta get
  public getData(){
    this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=La%20Casa%20de%20Papel&api_key=2122fcf1ce50ad685a82aea1c0696908&format=json&limit=10"

    return this.http.get(this.url)
    //.do(this.logMethod)
    .map(this.extractMethod)
    //.do(this.logMethod)
    .catch(this.catchError)

  }

  public postData(){
    this.url = 'https://api.edistar.com/sime/ricercaMatricola/'

    let dati = new FormData();
    dati.append('matricola','4819301901')

    return this.http.post(this.url,dati)
    //.do(this.logMethod)
    .map(this.extractMethod)
    .catch(this.catchError)

  }

  //Quando non riesce a connettersi al server o ci sono dati danneggiati
  private catchError(error: Response | any): any{
    console.log(error)
    return Observable.throw(error.json().error || "Errore del server.")
  }

  //Per loggare il risultato dalla chiamata
  private logMethod(res: Response | any): void{
    console.log(res);
  }

  //Per mappare i dati ottenuti
  private extractMethod(res: Response): any{
    return res.json();
  }
}
