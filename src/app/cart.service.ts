import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }



  cartProgNames : string[] = ['demo books prog'];
  cartAcaNames : string[] = ['demo books aca'];
  cartStoryNames : string[] = ['demo books story'];

  getCartProgNames(): string[] {
    return this.cartProgNames;
  }
  getAcaNames(): string[] {
    return this.cartAcaNames;
  }
  getStroryNames(): string[] {
    return this.cartStoryNames;
  }

  setCartProgNames(name: string) {
    this.cartProgNames.push(name);
    console.log(this.cartProgNames);
  }
  setCartAcaNames(name: string) {
    this.cartAcaNames.push(name);
  }
  setCartsStoryNames(name: string) {
    this.cartStoryNames.push(name);
  }

}
