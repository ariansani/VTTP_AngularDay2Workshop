import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input()
  orders! :Order[]
  
  orderList: Order[] = [];

  @Input()
  totalAmt = 0

  @Output()
  onDelete = new Subject<Order>();

  constructor() { }

  ngOnInit(): void {
   
  }

  delete(id: string){

  let array = this.orders;
  let deleteThisRecord = array.find(i => i.id === id);

 
  
  let order : Order = deleteThisRecord as Order;

  this.onDelete.next(order)

}

}
