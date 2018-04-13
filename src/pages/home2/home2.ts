import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {RACISM_LIST} from '../../mocks/Racism.mock';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {


      RacismList= RACISM_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
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

  showAlert(racism) {
    let alert = this.alertCtrl.create({
      title: racism.name,
      message:racism.description,
      buttons: ['Cancel']

    });
    alert.present();
  }


}
