import { Component } from '@angular/core';
import { CarouselComponent } from "../../units/carousel/carousel.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
