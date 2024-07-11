import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {ShopComponent} from "./shop/shop.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {NgForOf} from "@angular/common";
import {Course} from "./model/Course";
import {interval} from "rxjs";
import {UserService} from "./service/user/user.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, NavbarComponent, CarouselComponent, ShopComponent, FooterComponent, HomeComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standard';

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe(result => {
      console.log(result);
    });
  }




  onLogin($event: boolean) {
    if($event) {
      this.title = "Login Succesfull"
    } else {
      this.title = "Unauthorized";
    }
  }

  courses: Course[] = [];

  // courses: {
  //   name: string;
  //   description: string;
  //   price: number;
  // }[] = [];

  ngOnInit() {
    this.courses = [
      new Course("Javascript", "Learn the basis of javascript", 200),
      new Course("Python", "Learn the basis of python", 200),
      new Course("Java", "Learn the basis of Java", 200),
    ]
  }
}
