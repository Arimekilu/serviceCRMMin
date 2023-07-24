import {Injectable, OnInit} from '@angular/core';
import {FBConfig} from "../Interfaces/FBInterfaces";
import { initializeApp } from "firebase/app";

@Injectable()

export class FBService implements OnInit{
  private firebaseConfig: FBConfig;
  private app
  constructor() { }

  ngOnInit(): void {
    this.firebaseConfig =  {
      apiKey: "AIzaSyCeefMV0_PXkd_GeFyepWdCMrTbdtwU4R0",
      authDomain: "autorepair-c20c6.firebaseapp.com",
      databaseURL: "https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "autorepair-c20c6",
      storageBucket: "autorepair-c20c6.appspot.com",
      messagingSenderId: "1007989762427",
      appId: "1:1007989762427:web:299cec0158bb54edeff5de"
    };
    this.app = initializeApp(this.firebaseConfig)
  }
}
