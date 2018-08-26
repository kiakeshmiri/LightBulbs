import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { Bulb } from '../model/Bulb';
import { Person } from '../model/person';
import { Bulbs } from '../model/bulbs';

@Injectable({
  providedIn: 'root'
})
export class PersonBulbService extends BaseService {

  constructor() {
    super();
  }

  //mock array of 100 off bulbs
  //I'm intentinally returning Observable to show a demo if this was a real application consuming rest api.
  getBulbsStatus(): Bulb[] {
    let bulbs = Bulb[100] = [];
    for (let index = 1; index <= 100; index++) {
      let bulb = new Bulb();
      bulb.Id = index;
      bulb.IsOn = false;
      bulbs.push(bulb);
    }
    return bulbs;
  }

  enterRoom(person: Person): Bulbs {
    let bulbs = this.getBulbsStatus();
    bulbs.forEach(b => {
      b.IsOn = ((b.Id % person.Id) == 0);
    });
    let onLightsCount = bulbs.filter(b => b.IsOn == true).length;
    return new Bulbs(of(bulbs), onLightsCount);
  }

  getPersonList(): Observable<Person[]> {
    let persons = Person[100] = [];
    for (let index = 1; index <= 100; index++) {
      let person = new Person(index);
      persons.push(person);
    }
    return of(persons);
  }
}
