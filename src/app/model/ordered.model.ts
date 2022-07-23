import { Customer } from "./customer.model";
import { OrderedTraining } from "./orderedTraining.model";

export class Order {

  constructor(){
      this.client = new Customer();
  }
  public id!: number;
  public client   : Customer;
  public products : Array<OrderedTraining> = [];
  public totalAmount!: number;
  public date!: Date;

}
