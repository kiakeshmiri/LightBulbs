import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonBulbService } from '../../service/person-bulb.service';
import { Bulb } from '../../model/Bulb';
import { Observable, BehaviorSubject } from 'rxjs';
import {switchMap, debounceTime} from 'rxjs/operators';
import { Person } from '../../model/person';
import {MatPaginator, MatSort, PageEvent} from '@angular/material';
import { Bulbs } from '../../model/bulbs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  person: Person = {
    Id: NaN,
    Name: ""
  };

  bulbs$: Observable<Bulb[]>;
  magicBulbs$: Observable<Bulb[]>;
  onLightsCount: Number = 0;
  onMagicLightsCount: Number = 0;
  displayedColumns: string[] = ['Id', 'OnOff'];
  isLoadingResults = true;
  lastEnteredPerson: Person;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //used BehaviorSubject to be able to render room lights initially by passing inital person to the Observer. otherwise I have to initial 100 light bulbs first and then handle person enter event. 
  private lightBulbSubjects = new BehaviorSubject<Person>(this.person);
  
  constructor(private peronBulbService: PersonBulbService) { }


  // Push to Observable stream.
  enterRoom(person: Person): void {
    this.lightBulbSubjects.next(person);
    this.lastEnteredPerson = person;

    this.bulbs$.subscribe(bulbs => {
      this.onLightsCount = bulbs.filter(b => b.IsOn == true).length;
    });
  }

  //all 100 people enters to room
  bulkEnterRoom(): void {
    this.peronBulbService.getPersonList()
      .subscribe(personlist => {
        let magicPersonList = personlist;
        magicPersonList.forEach(magicPerson => {
          let bulbs = this.peronBulbService.enterRoom(magicPerson);
          this.magicBulbs$ = bulbs.BulbList;
          this.onMagicLightsCount = bulbs.Count;
    
        });
      });
  }

  ngOnInit(): void {
    this.bulbs$ = this.magicBulbs$ = this.lightBulbSubjects.asObservable().pipe(
      // wait 500ms
      debounceTime(500),

      switchMap((person: Person) => this.peronBulbService.enterRoom(person).BulbList)
    );
  }

  getOnOffIcons(status): string {
    return (status) ? "" : "_outline_blank";
  }
}
