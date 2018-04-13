import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RACISM_LIST} from '../../mocks/Racism.mock';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

      RacismList= RACISM_LIST;




  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


    onRacism(racism)
    {

      console.log('Racism', racism);
    this.navCtrl.push('RacismDescriptionPage',{rac:racism})
    }


    onReport()
    {
      this.navCtrl.push('Report1Page');
    }

}
