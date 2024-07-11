import {Component, Input, Output} from '@angular/core';
import {UserDTO} from "../model/UserDTO";
import {UserService} from "../service/user/user.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  inputParam: string = "";

  constructor(private userService: UserService) {
  }

  nome_completo: string = "";

  ngOnInit(): void {
      this.userService.findUserByMail(localStorage.getItem("user_email")).subscribe((user: UserDTO) =>{
      this.nome_completo = user.nome + " " + user.cognome;
  })


}






}
