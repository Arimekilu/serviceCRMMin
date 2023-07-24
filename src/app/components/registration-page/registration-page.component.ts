import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FBService} from "../../services/fb.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  constructor(
    private formBuilder: FormBuilder,
    private fbService: FBService,
    private router: Router
    ) {
  }

}
