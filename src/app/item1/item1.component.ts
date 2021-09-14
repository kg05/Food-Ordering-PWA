import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cartCntFunc();
  }

  item = {
    id : 2,
    vendorName : "Da Mario's",
    name  : "Lenca Sauce Teriaky",
    qnt   : 1,
    price : 32.10
  }

  inc(){
    this.item.qnt++;
  }

  dec(){
    if(this.item.qnt > 1)
      this.item.qnt--;
  }

  addCart(){
    console.log(this.item.qnt)
    let allItems:any=[];
    let cartData = localStorage.getItem('localCart1');
    if(cartData === null){
      allItems.push(this.item);
    }

    else {
      let itemCart:any = JSON.parse(cartData);
      var idx = -1;
      for(let i in itemCart){
        if(itemCart[i].name === this.item.name){
          itemCart[i].qnt += this.item.qnt;
          allItems.push(itemCart[i]);
          idx = 1
          break;
        }
      }
      if(idx === -1)
        allItems.push(this.item);
    }
    console.log(allItems);
    localStorage.setItem('localCart1', JSON.stringify(allItems));
    this.cartCntFunc();
  }

  cartCnt:number = 0;
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
