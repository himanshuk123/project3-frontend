import { Component, OnInit } from '@angular/core';
import { Orders, OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  message : string;
  constructor(private order:OrderService) { }

  ngOnInit(): void {
  }

  onSubmit(addOrder:Orders):any{
    console.log(addOrder);
     this.order.addOrder(addOrder).subscribe((data) => {
      this.message=data});
  }
}


  


  

