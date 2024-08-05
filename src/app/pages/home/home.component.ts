import { Component } from '@angular/core';
import { CarouselComponent } from "../../units/carousel/carousel.component";
import { CardsComponent } from "../../units/cards/cards.component";
import { HomecardsComponent } from "../../units/homecards/homecards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardsComponent, HomecardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
