import { Person } from "./person.js";

export class Student extends Person{
    constructor(id, name, adrress, email, toan, li, hoa, type){
        super(id, name, adrress, email);

        this.toan = toan;
        this.li = li;
        this.hoa = hoa;
        this.type = type;
        this.diemTB=0;
        
    }
    tinhDiemTB(){
        return (parseFloat(this.toan)+parseFloat(this.li)+parseFloat(this.hoa))/3;
    }

}