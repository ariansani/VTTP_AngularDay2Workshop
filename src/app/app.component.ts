import { Component } from '@angular/core';
import { Order } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31workshop';

  orderList: Order[] = [];
  total:number = 0;

  newOrder(order: Order){
    console.info(">>>>> new order: " ,order);
    this.orderList.push(order);
    console.info("Order list >>>>>>: ",this.orderList);
    
    this.total=0;
    this.orderList.forEach(order => {
      console.info("each order", order)
    
      this.total +=  order.price * parseInt(order.quantity)

     });
     console.info(this.orderList)
  }

  updateOrderList(order: Order){
    console.info(">>>>> Remove this order: " ,order);
    this.orderList.forEach( (item, index) => {
      if(item === order) this.orderList.splice(index,1);
    });
    console.info("Updated orderList >>>>", this.orderList)
  }


}
