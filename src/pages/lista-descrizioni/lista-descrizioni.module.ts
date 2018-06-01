import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDescrizioniPage } from './lista-descrizioni';

@NgModule({
  declarations: [
    ListaDescrizioniPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDescrizioniPage),
  ],
})
export class ListaDescrizioniPageModule {}
