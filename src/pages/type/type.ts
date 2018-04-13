import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RACISM_LIST} from '../../mocks/Racism.mock';

/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type',
  templateUrl: 'type.html',
})
export class TypePage {

    RacismList= RACISM_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypePage');
  }


  onRacism(racism)
  {

    console.log('Racism', racism);
  this.navCtrl.push('RacismDescriptionPage',{rac:racism})
  }

}
