import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
  providers: [CartService]
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }

  acdemicCarts : string[] = this.cartService.getAcaNames();
  progCarts : string[] = this.cartService.getCartProgNames();
  storyCarts : string[] = this.cartService.getStroryNames();

  ngOnInit(): void {
  }

}
