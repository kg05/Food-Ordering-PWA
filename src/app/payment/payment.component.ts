import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private checkout: CheckoutComponent) { }
  date = "";
  ngOnInit(): void {
    this.load();
    this.date = new Date().toString();
    this.date = this.date.slice(0,24);
  }
  items:any = [];
  user:any = {};
  delType = "Collection";
  val = "A";
  point = "Point";
  totlAmnt = 0;

  load(){
    this.items = this.checkout.dataItems;
    var tmp = localStorage.getItem('user')
    if(tmp !== null){
      this.user = JSON.parse(tmp);
    }

    if(this.user.delivery_type === "rad1"){
      this.delType = "Table Delivery";
      this.val = this.user.tablenum;
      this.point = "Table"
    }

    for(var i in this.items){
      this.items[i].price = parseFloat(parseFloat(this.items[i].price).toFixed(2));
      this.totlAmnt = parseFloat((this.totlAmnt + (parseFloat(this.items[i].qnt) * parseFloat(this.items[i].price))).toFixed(2));
    }
    this.totlAmnt += 15;
    console.log(this.items ,this.user)
  }

  mul(item:any){
    return parseFloat((item.qnt *item.price).toFixed(2));
  }
  
}
