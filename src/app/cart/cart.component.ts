import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }
  totalItemAmt = 0;
  grandTotal = 0;
  totalqnt = 0;

  items:any = [];

  inc(item:any){
    item.img1 = "https://img.icons8.com/material-sharp/15/000000/minus.png";
    item.qnt += 1;
    this.totalqnt += 1;
    item.totPrice = (parseFloat(item.totPrice) + parseFloat(item.price)).toFixed(2);
    this.totalItemAmt = parseFloat((this.totalItemAmt + parseFloat(item.price)).toFixed(2));
    this.grandTotal = parseFloat((this.grandTotal + parseFloat(item.price)).toFixed(2));
  }

  dec(item:any){
    if(item.qnt > 1){
      item.qnt -= 1;
      this.totalqnt -= 1;
      item.totPrice = (parseFloat(item.totPrice) - parseFloat(item.price)).toFixed(2);
      this.totalItemAmt = parseFloat((this.totalItemAmt - parseFloat(item.price)).toFixed(2));
      this.grandTotal = parseFloat((this.grandTotal - parseFloat(item.price)).toFixed(2));
      if(item.qnt == 1)
        item.img1 = "https://img.icons8.com/material-rounded/24/000000/delete-forever.png";
    }
    else{
      this.removeSingleItem(item);
    }
  }

  loadData(){
    var data = localStorage.getItem('localCart');
    if(data != null){
      var temp = JSON.parse(data);
      for(let i of temp){
        i.totPrice = (parseFloat(i.price) * parseFloat(i.qnt)).toFixed(2);
        i.img1 = "https://img.icons8.com/material-sharp/15/000000/minus.png";
        if(i.qnt === 1){
          i.img1 = "https://img.icons8.com/material-rounded/24/000000/delete-forever.png";
        }
        i.img2 = "https://img.icons8.com/android/15/000000/plus.png";
        this.items.push(i);
        this.totalqnt = parseInt(i.qnt);
        this.totalItemAmt = parseFloat((parseFloat(i.price) * parseFloat(i.qnt)).toFixed(2));
      }
    }
    data = localStorage.getItem('localCart1');
    if(data != null){
      var temp = JSON.parse(data);
      for(let i of temp){
        i.totPrice = (parseFloat(i.price) * parseFloat(i.qnt)).toFixed(2);
        i.img1 = "https://img.icons8.com/material-sharp/15/000000/minus.png";
        if(i.qnt === 1){
          i.img1 = "https://img.icons8.com/material-rounded/24/000000/delete-forever.png";
        }
        i.img2 = "https://img.icons8.com/android/15/000000/plus.png";
        this.items.push(i);
        this.totalqnt += parseInt(i.qnt);
        this.totalItemAmt += parseFloat((parseFloat(i.price) * parseFloat(i.qnt)).toFixed(2));
      }
    }
    this.grandTotal = 10 + 5 + this.totalItemAmt;
  }

  removeAll(){
    localStorage.removeItem('localCart');
    localStorage.removeItem('localCart1');
    this.items = [];
    this.grandTotal = 0;
    this.totalItemAmt = 0;
  }

  removeSingleItem(item:any){
    for(let i=0; i< this.items.length;i++){
      console.log(this.items[i].id)
      if(this.items[i].name === item.name){
        if(this.items[i].id === 1)
          localStorage.removeItem('localCart');
        else
          localStorage.removeItem('localCart1');
        this.items.splice(i,1)
        
        break;
      }
    }
  }

  public get data():Array<object>{
    this.loadData();
    return this.items;
  }
}
 