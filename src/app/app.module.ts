import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileChooser } from '@ionic-native/file-chooser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FilePath } from '@ionic-native/file-path';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {FirebaseProvider} from '../providers/firebase/firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBR3NW_YHhen6SAYvvIr2mSrxHbT5T9zI0",
    authDomain: "zirra-ad665.firebaseapp.com",
    databaseURL: "https://zirra-ad665.firebaseio.com",
    projectId: "zirra-ad665",
    storageBucket: "",
    messagingSenderId: "327604129138"
  };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    FilePath,
    FirebaseProvider

  ]
})
export class AppModule {}
