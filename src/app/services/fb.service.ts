import {Injectable} from '@angular/core';
import {FBConfig} from "../Interfaces/FBInterfaces";
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {regError} from "../Interfaces/errorInterfaces";
import {Observable, of} from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;


@Injectable()

export class FBService {
  private readonly firebaseConfig: FBConfig;
  private app
  private auth
  user?: Observable<User | null >

  getUser() {
    return this.auth.currentUser?.email
  }

  createUserWithEmailAndPass(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: any) => {
        // Signed in
        console.log('then')
        const user = userCredential.user;
        console.log(userCredential.user)

      }).catch((error: any) => {
      console.log('catch')
      const errorCode = error.code;
      const errorMessage = error.message;
      const myError: regError = {
        code: error.code,
        message: error.message
      }
      const appRoot = document.querySelector('.root')
      console.log(appRoot)
      appRoot?.insertAdjacentHTML('beforeend', '<app-registration-error [error]=this.myError></app-registration-error>')
//todo Добавить вызов модалки с компонентом ошибки
    });

  }

  signInWithEmailAndPass(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

      })
  }

  public onAuthStateChang() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user.uid)
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
