import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  panjang: any;
  lebar: any;
  tinggi: any;
  volume:any = 0;

  constructor(public navCtrl: NavController) {

  }

  hitungVolume(){
    if(this.panjang && this.lebar && this.tinggi) this.volume = (this.panjang * this.lebar * this.tinggi).toFixed(3);
    else this.volume = 0;
  }

  reset(){
    this.panjang = null
    this.lebar = null
    this.tinggi = null
    this.volume = 0
  }

}
