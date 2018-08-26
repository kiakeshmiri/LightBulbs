import { Bulb } from "./Bulb";
import { Observable, of } from 'rxjs';

export class Bulbs {
    BulbList: Observable<Bulb[]>;
    Count: Number;

    constructor(bulbList: Observable<Bulb[]>, count: Number) {
        this.BulbList = bulbList;
        this.Count = count;
    }
}
