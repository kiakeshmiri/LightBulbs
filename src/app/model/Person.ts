export class Person{
    Id : number;
    Name : string;

    constructor(id: number){
        this.Id = id;
        this.Name = "Person #" + id;
    }
}