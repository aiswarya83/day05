import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-homecards',
  standalone: true,
  imports: [],
  templateUrl: './homecards.component.html',
  styleUrl: './homecards.component.css'
})
export class HomecardsComponent {
  constructor(private api:ApiService){}
    products:any=""
    ngOnInit()
    {
      this.api.getProducts().subscribe((data:any)=>{this.products=data})
    }
  }
