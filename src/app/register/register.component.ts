import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RegisterRequest} from "../model/registerRequest";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = new RegisterRequest();

  onUpdatePassword($event: Event) {
    console.log("Password inserita: "+ (<HTMLInputElement>$event.target).value);
  }

  onUpdateEmail($event: Event) {
    console.log("Email inserita: " + (<HTMLInputElement>$event.target).value);
  }

  onUpdateLastname($event: Event) {
    console.log("Cognome inserito: " +(<HTMLInputElement>$event.target).value);
  }

  onUpdateName($event: Event) {
    console.log("Nome inserito: "+ (<HTMLInputElement>$event.target).value);
  }

  onSubmit() {
    console.log(this.registerRequest);
  }
}
