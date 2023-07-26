import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FBService} from "../../services/fb.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              protected fbService: FBService
              ) {
    this.loginForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit($event: MouseEvent) {
    $event.preventDefault()
    this.fbService.signInWithEmailAndPass(this.loginForm.value.email, this.loginForm.value.password)
  }

}
