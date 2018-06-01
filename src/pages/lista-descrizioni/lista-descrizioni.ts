import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScontrinoServiceProvider } from '../../providers/scontrino-service/scontrino-service';
import { Risultato } from '../../pages/risultato';

/**
 * Generated class for the ListaDescrizioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-descrizioni',
  templateUrl: 'lista-descrizioni.html',
})
export class ListaDescrizioniPage {
  
  public ris: Risultato

  completed: boolean
  success: boolean

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public scontrinoService: ScontrinoServiceProvider
  ) {
}

  ionViewDidLoad() {
    this.completed = false
    this.success = null
    this.postData()
  }


  postData(){
    this.scontrinoService.postData().subscribe(data=>{

      console.log(data)
      this.ris = new Risultato(
        data.DESCRIZIONE, 
        data.RISULTATO
      )

      if(this.ris.risultato == 'KO'){
        this.success = false
      }
      else if(this.ris.risultato == 'OK'){
        this.success = true
      }
      else{
        this.success = null
      }

      console.log(this.ris)

      this.completed = true;
    })

  }
}
