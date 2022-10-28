import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  carts : string[] = [];

  getCarts() {
    return this.carts;
  }

  setCarts(cart : string) {
    this.carts.push(cart);
  }
  
}
