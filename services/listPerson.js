export class ListPerson {
  list = [];

  add = (ND) => {
    this.list = [...this.list, ND];
  };
  delete = (id) => {
    const index = this.list.findIndex((element) => {
      return element.id === id;
    });
    this.list.splice(index, 1);
  };
  findById(id) {
    return this.list.find((element) => {
      return element.id === id;
    });
  }
  update(ND) {
    const index = this.list.findIndex((element) => {
      return element.id === ND.id;
    });
    this.list[index] = ND;

  }
  filterByType(type){
    const data = this.list.filter((element)=>{
      if(type ==="all"){
        return true;
      }
      return element.type===type;
   });
   return data;
  }
  
}
