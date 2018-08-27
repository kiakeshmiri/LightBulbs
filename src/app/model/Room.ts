import { Person } from "./person";

export class Room{
    Person : Person;
    BulbsCount : number;

    constructor(person: Person, bulbsCount: number){
        this.Person = person;
        this.BulbsCount = bulbsCount;
    }
}