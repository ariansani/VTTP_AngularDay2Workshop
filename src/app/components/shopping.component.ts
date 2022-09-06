import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order} from '../models';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
 
  orderForm!: FormGroup;

  @Output()
  onNewOrder = new Subject<Order>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      item: this.fb.control(''),
      price: this.fb.control(''),
      quantity: this.fb.control(''),
      id: this.fb.control('')
    });
  }

  processForm() {
    console.info('submit button clicked');


    let order : Order = this.orderForm.value as Order


    this.onNewOrder.next(order)


  }

}
