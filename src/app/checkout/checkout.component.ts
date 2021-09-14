import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private cart:CartComponent) { }

  ngOnInit(): void {
    this.load();
  }
  items:any = [];
  public user:any ={};
  
  load(){
    this.items = this.cart.data;
  }
 
  onSubmit(data:any) {
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = "/payment";
  }

  get dataItems():any{
    this.load();
    return this.items;
  }
}
