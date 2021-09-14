import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  cartCnt:number = 0;
  vegCnt:number = 0;
  sauceCnt:number = 0;

  ngOnInit(): void {
    this.cartCntFunc();
  }

  cartCntFunc(){
    var cartData = localStorage.getItem('localCart');
    console.log(cartData)
    var cartData1 = localStorage.getItem('localCart1');
    var t1 = 0, t2 = 0;
   
    if(cartData != null){
      var temp:any = JSON.parse(cartData);
      this.vegCnt =  parseInt(temp[0].qnt);
      t1 = 1;
    }
    if(cartData1 != null){
      var temp:any = JSON.parse(cartData1);
      t2 = 1;
      this.sauceCnt += parseInt(temp[0].qnt);
    }
    this.cartCnt = t1 + t2;
  }
}
