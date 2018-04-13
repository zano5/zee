import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import {FormGroup,FormControl, FormBuilder,FormArray,Validators}  from '@angular/forms';
import { FilePath } from '@ionic-native/file-path';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {


  report:FormGroup;
  stringUri:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fileChooser: FileChooser, private fb: FormBuilder,private filePath: FilePath) {

      this.report = this.fb.group({

          name:[''],
          email:[''],
          number:[''],
          gender:[''],
          racial:[''],
          description:[''],
          uri:[this.stringUri]


      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  onSubmit()
  {

  }


  formSubmit(report)
  {

  }


  onFile()
  {

    /*this.filePath.resolveNativePath(path)
  .then(filePath => console.log(filePath))
  .catch(err => console.log(err));*/
  this.fileChooser.open()
.then(uri => this.stringUri = uri)
 .catch(e => console.log(e));
  }

}
