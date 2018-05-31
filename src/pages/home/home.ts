import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScontrinoServiceProvider } from '../../providers/scontrino-service/scontrino-service';
import { Canzone } from '../../pages/canzone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any
  public d = (<any>this.data)
  canzoni_array = Array<Canzone>()
  
  constructor(
    public navCtrl: NavController,
    public scontrinoService: ScontrinoServiceProvider
  ) {
      this.getData();
      this.postData();
      this.canzoni_array = []
  }
  
  getData(){
    this.scontrinoService.getData().subscribe(data=>{
      this.data = data
      let array_canzoni = this.data.results.trackmatches.track
      console.log(array_canzoni)
    })
  }

  postData(){
    this.scontrinoService.postData().subscribe(data=>{
      this.data = data;
      console.log(data)
      let ris = this.data.RISULTATO
      if(ris == 'KO'){
        console.log("assa stare")
      }
      else if(ris == 'OK'){
        console.log("va ben")
      }
      else{
        console.log("no xe so mare bona")
      }
    })
    console.log(this.data)

  }
}
