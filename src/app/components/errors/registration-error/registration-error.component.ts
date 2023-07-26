import {Component, Input} from '@angular/core';
import {regError} from "../../../Interfaces/errorInterfaces";

@Component({
  selector: 'app-registration-error',
  templateUrl: './registration-error.component.html',
  styleUrls: ['./registration-error.component.scss']
})
export class RegistrationErrorComponent {
@Input() regError: regError | undefined
}
