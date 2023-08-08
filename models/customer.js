import { Person } from "./person.js";

export class Customer extends Person{
    constructor(id, name, adrress, email, company, value, rate, type){
        super(id, name, adrress, email);
        this.company =company;
        this.value = value;
        this.rate =rate;
        this.type = type;
    }
}