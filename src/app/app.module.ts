import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import {MatInputModule} from "@angular/material/input";
import {FBService} from "./services/fb.service";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { RegistrationErrorComponent } from './components/errors/registration-error/registration-error.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { CreateCarComponent } from './components/create-car/create-car.component';
import { SelectModelComponent } from './components/create-car/select-model/select-model.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    RegistrationErrorComponent,
    UserInfoComponent,
    CreateClientComponent,
    CreateCarComponent,
    SelectModelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatAutocompleteModule
    ],
  providers: [FBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
