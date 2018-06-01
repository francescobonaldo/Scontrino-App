import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Canzone } from '../../pages/canzone';
import { Risultato } from '../../pages/risultato';
import { ListaCanzoniPage } from '../../pages/lista-canzoni/lista-canzoni';
import { ListaDescrizioniPage } from '../../pages/lista-descrizioni/lista-descrizioni';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController,
  ) {
  }
  

  goToCanzoniPage(){
    this.navCtrl.push(ListaCanzoniPage)
  }
  goToDescrizioniPage(){
    this.navCtrl.push(ListaDescrizioniPage)
  }
}
