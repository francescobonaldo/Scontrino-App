import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCanzoniPage } from './lista-canzoni';

@NgModule({
  declarations: [
    ListaCanzoniPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCanzoniPage),
  ],
})
export class ListaCanzoniPageModule {}
