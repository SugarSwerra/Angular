import {Component, Input, Output} from '@angular/core';
import {UserDTO} from "../model/UserDTO";
import {UserService} from "../service/user/user.service";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private userService: UserService) {
  }

  nome_completo: string = "";

  ngOnInit(): void {
      this.userService.findUserByMail(localStorage.getItem("user_email")).subscribe((user: UserDTO) =>{
        if (user.nome == null || user.cognome == null) {
          this.nome_completo = "";
        } else {
          this.nome_completo = user.nome + " " + user.cognome;
        }
  })
}

  @Input()
  inputParam: string = "";


  isLogged(): boolean {
    return (localStorage.getItem("access_token") != null);
  }

  public logout():void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');
    window.location.reload();
  }

}
