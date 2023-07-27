import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat";

import {FBService} from "../../services/fb.service";
import User = firebase.User;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user?: string | null
  getUser(){
    this.user = this.fbService.getUser()
    this.fbService.onAuthStateChang()
  }

  constructor(private fbService: FBService) {
  }

  ngOnInit(): void {
    this.getUser()

  }


}
