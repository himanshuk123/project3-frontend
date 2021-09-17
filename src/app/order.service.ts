import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpService: HttpClient) { }



public addOrder(addOrder: Orders  ) {
  console.log("ins service add");
  console.log(addOrder);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:8586/api/add-order/{customerId}/{addressId}", addOrder,  { headers, responseType: 'text'});
}
}

export class Orders {
  id: number ;
  date: string;
  discount: number;
  payment_mode:string;
  status: string;
  total_price:number;
  tracking : number;
}