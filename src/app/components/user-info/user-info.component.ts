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
    this.fbService.getUser().subscribe(res => this.user = res)
  }

  constructor(private fbService: FBService) {
    this.fbService.currentUser$?.subscribe(userEmail => this.user = userEmail)
  }

  ngOnInit(): void {


  }


}
