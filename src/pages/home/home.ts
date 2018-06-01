import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScontrinoServiceProvider } from '../../providers/scontrino-service/scontrino-service';
import { Canzone } from '../../pages/canzone';
import { Risultato } from '../../pages/risultato';
import { ListaCanzoniPage } from '../../pages/lista-canzoni/lista-canzoni';
import { ListaDescrizioniPage } from '../../pages/lista-descrizioni/lista-descrizioni';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any
  public ris: Risultato = null

  completed: boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public scontrinoService: ScontrinoServiceProvider
  ) {
      this.postData();
  }
  


  postData(){
    this.scontrinoService.postData().subscribe(data=>{

      this.ris = new Risultato(
        data.DESCRIZIONE, 
        data.RISULTATO
      )

      if(this.ris.risultato == 'KO'){
        console.log("assa stare")
      }
      else if(this.ris.risultato == 'OK'){
        console.log("va ben")
      }
      else{
        console.log("no xe so mare bona")
      }

      console.log(this.ris)
    })

  }

  goToCanzoniPage(){
    this.navCtrl.push(ListaCanzoniPage)
  }
  goToDescrizioniPage(){
    this.navCtrl.push(ListaDescrizioniPage)
  }
}
