import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup,FormControl, FormBuilder,FormArray,Validators}  from '@angular/forms';
import {Report} from '../../modals/report.modals';
import {EmailValidator} from '../../validators/email';

/**
 * Generated class for the Report1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report1',
  templateUrl: 'report1.html',
})
export class Report1Page {

  report:FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {



          this.report = this.fb.group({

              name:['',[Validators.required,Validators.minLength(2)]],
              email:['',EmailValidator.isValid],
              number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
              gender:['',[Validators.required]],
              racial:['',[Validators.required]]




          })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Report1Page');
  }


  formSubmit({value,valid}:{value:Report,valid:boolean})
  {


    this.navCtrl.push('Report2Page',{report:value});
  //  this.reportObject.name = this.report.controls.name;
   console.log('report',value);
  }



}
