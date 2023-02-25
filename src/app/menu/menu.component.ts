import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { menu, IMenu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: Array<IMenu>=menu; 
  constructor(private cs: CartService) {

  }
  addToCart(menu: IMenu){
    alert("added");
    this.cs.addToCart(menu);

  }
}
