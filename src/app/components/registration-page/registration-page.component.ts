import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FBService} from "../../services/fb.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registrationForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private fbService: FBService,
    private router: Router
    ) {
    this.registrationForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPass: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit($event: MouseEvent) {
    $event.preventDefault()
    this.fbService.createUserWithEmailAndPass(this.registrationForm.value.email, this.registrationForm.value.password )
  }
}
