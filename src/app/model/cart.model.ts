import { Customer } from "./customer.model";
import { OrderedTraining } from "./orderedTraining.model";

export class Cart{

  constructor(name:string){

      this.name = name;
      this.orderedTrainings = new Map();
      this.client = new Customer();
  }

  public id!:number;

  public name:string;

  public orderedTrainings : Map<number,OrderedTraining>;

  public client:Customer;

}
