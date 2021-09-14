import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cartCnt:number = 0;
  ngOnInit(): void {
    this.cartCntFunc();
  }

  cartCntFunc(){
    var cartData = localStorage.getItem('localCart');
    var cartData1 = localStorage.getItem('localCart1');
    var t1 = 0, t2 = 0;
    if(cartData != null){
      t1 = 1;
    }
    if(cartData1 != null){
      t2 = 1;
    }
    this.cartCnt = t1 + t2;
  }
}
