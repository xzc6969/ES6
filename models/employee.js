import { Person } from "./person.js";

export class Employee extends Person{
    constructor(id, name, adrress, email, ngaylam, luong,type){
        super(id, name, adrress, email);
        this.ngaylam = ngaylam;
        this.luong = luong;
        this.type = type;
    }
    tinhTongLuong(){
        return parseFloat(this.luong)*parseFloat(this.ngaylam);
    }
}