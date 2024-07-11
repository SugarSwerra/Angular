import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  Courses 

 @Input()
  course : {name: string; description: string; price: number;}



}
