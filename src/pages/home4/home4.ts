import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,AlertController } from 'ionic-angular';
import {RACISM_LIST} from '../../mocks/Racism.mock';
/**
 * Generated class for the Home4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home4',
  templateUrl: 'home4.html',
})
export class Home4Page {

    RacismList= RACISM_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home4Page');
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: myEvent
    });
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
