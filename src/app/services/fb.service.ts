import {Injectable, OnInit} from '@angular/core';
import {FBConfig} from "../Interfaces/FBInterfaces";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

// @ts-ignore
@Injectable()

export class FBService {
  private readonly firebaseConfig: FBConfig;
  private app
  private auth
  private createUserWithEmailAndPass(auth: any, email: string, password: string) {
    createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential: any) => {
      // Signed in
      const user = userCredential.user;
      // ...
    }).catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  private signInWithEmailAndPass (auth: any, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  private onAuthStateChang (){
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyCeefMV0_PXkd_GeFyepWdCMrTbdtwU4R0",
      authDomain: "autorepair-c20c6.firebaseapp.com",
      databaseURL: "https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "autorepair-c20c6",
      storageBucket: "autorepair-c20c6.appspot.com",
      messagingSenderId: "1007989762427",
      appId: "1:1007989762427:web:299cec0158bb54edeff5de"
    };
    this.app = initializeApp(this.firebaseConfig)
    this.auth = getAuth(this.app)
  }


}
