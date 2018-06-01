import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScontrinoServiceProvider } from '../../providers/scontrino-service/scontrino-service';
import { Canzone } from '../../pages/canzone';


/**
 * Generated class for the ListaCanzoniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-canzoni',
  templateUrl: 'lista-canzoni.html',
})
export class ListaCanzoniPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public scontrinoService: ScontrinoServiceProvider
            ) {
  }

  canzoni_array = Array<Canzone>()
  completed: boolean;


  ionViewDidLoad() {
    this.canzoni_array = []
    this.completed = false
    this.getData()
  }

  getData(){
    this.scontrinoService.getData().subscribe(d=>{
      let array_canzoni = d.results.trackmatches.track

      array_canzoni.forEach(song => {
        this.canzoni_array.push({
          nome_canzone: song.name,
          artista_canzone: song.artist,
          url_canzone: song.url
        })
      });

      console.log(this.canzoni_array)
      this.completed = true;
    })
  }

}
