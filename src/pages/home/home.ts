import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScontrinoServiceProvider } from '../../providers/scontrino-service/scontrino-service';
import { Canzone } from '../../pages/canzone';
import { Risultato } from '../../pages/risultato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any
  public d = (<any>this.data)
  canzoni_array = Array<Canzone>()
  public ris: Risultato = null

  completed: boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public scontrinoService: ScontrinoServiceProvider
  ) {
      this.canzoni_array = []
      //this.getData();
      this.postData();
  }
  
  getData(){
    this.scontrinoService.getData().subscribe(d=>{
      let array_canzoni = d.results.trackmatches.track
      this.data = array_canzoni

      array_canzoni.forEach(song => {
        this.canzoni_array.push({
          nome_canzone: song.name,
          artista_canzone: song.artist,
          url_canzone: song.url
        })
      });

      this.data = this.canzoni_array
      console.log(this.data)
      this.completed = true;
    })
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
}
