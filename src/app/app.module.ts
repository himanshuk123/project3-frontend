import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersearchComponent } from './customersearch/customersearch.component';
import { AddressComponent } from './address/address.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { CommonModule } from '@angular/common';

// const routes: Routes = [
//   {path: 'login', component: LoginComponent},
//   {path: 'staffdashboard', component: StaffdashboardComponent},
  // {path: '', redirectTo: '/staffdashboard', pathMatch: 'full'},
  // {path: '**', redirectTo: '/staffdashboard', pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffdashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    
    SearchproductComponent,
    OrderComponent,
    CustomerComponent,
    CustomersearchComponent,
    AddressComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormGroup,
    CommonModule,
    FormControl,
    RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'staffdashboard', component: StaffdashboardComponent},
    {path: 'product', component:ProductComponent},
    {path: 'order', component:OrderComponent},
    {path: 'customer', component:CustomerComponent},

  ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

