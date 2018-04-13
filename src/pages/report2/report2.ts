import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import {FormGroup,FormControl, FormBuilder,Validators}  from '@angular/forms';
import {Report} from '../../modals/report.modals';
import {FirebaseProvider} from '../../providers/firebase/firebase';




/**
 * Generated class for the Report2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-report2',
  templateUrl: 'report2.html',
})
export class Report2Page {
    // @ViewChild('myInput') myInput
    input
    stringUri:string;
    report: FormGroup;
    placeName:string;
    rep: Report;
    repo={
      name:"",
      email:"",
      number:"",
      gender:"",
      racial:"",
      description:"",
      province:'',
      location:"",
      address:"",
      file:"",
      date:""


    };




  constructor(public navCtrl: NavController, public navParams: NavParams,private fileChooser: FileChooser, private fb:FormBuilder, private firebase: FirebaseProvider) {



    this.report = this.fb.group({


        description:['',[Validators.required]],
        location:['',[Validators.required]],
        province:['',[Validators.required]],
        address:['',[Validators.required]],
        file:this.stringUri,
        date:['', [Validators.required]]

    });


  }

  ionViewWillEnter() {
   // Google Places API auto complete
   this.input = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
   let autocomplete = new google.maps.places.Autocomplete(this.input, {types: ['geocode']});
   this.repo.location = "Pre";

   console.log(this.repo.location);
   // google.maps.event.addListener(autocomplete, 'place_changed', (res) => {
   //   // retrieve the place object for your use
   //   console.log(res);
   //   let place = autocomplete.getPlace();
   //
   //
   //
   //   // console.log("place Name",place.getName())
   //
   //
   //
   // });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Report2Page');
    this.rep= this.navParams.get('report');

    console.log("report",this.rep);


  }

formSubmit({value,valid}:{value:Report,valid:boolean})
{
  console.log(this.report.value)
  console.log(this.input.value)

 this.repo.name= this.rep.name;
  this.repo.email= this.rep.email;
     this.repo.number= this.rep.number;
        this.repo.gender= this.rep.gender;
          this.repo.racial= this.rep.racial;
            this.repo.location= value.location;
              this.repo.file= value.file;
              this.repo.date=value.date;
               this.repo.description= value.description;
 //
 //                console.log("Report Objects",this.repo);
 //
                 this.firebase.addReport(this.repo);
 //
 //
                 this.navCtrl.setRoot('Home2Page');

}

  onFile(){
    this.fileChooser.open()
  .then(uri => this.stringUri = uri)
   .catch(e => console.log(e));
  }

}
