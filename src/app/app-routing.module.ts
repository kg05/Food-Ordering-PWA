import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { Item1Component } from './item1/item1.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component:HomeComponent},
  {path: "vendor", component:VendorComponent},
  {path: "menu", component:MenuComponent},
  {path: "item", component:ItemComponent},
  {path: "cart", component:CartComponent},
  {path: "item1", component:Item1Component},
  {path: "checkout", component:CheckoutComponent},
  {path: "payment", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
