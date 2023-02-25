import { Injectable } from '@angular/core';
import { IMenu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Array<IMenu> = [];
  constructor() { }
  
  addToCart(obj: IMenu){
    this.cart.push(obj);

  }

  getCart(){
    return this.cart;
  }



}

