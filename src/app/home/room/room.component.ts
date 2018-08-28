import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonBulbService } from '../../service/person-bulb.service';
import { Bulb } from '../../model/Bulb';
import { Observable, BehaviorSubject } from 'rxjs';
import {switchMap, debounceTime} from 'rxjs/operators';
import { Person } from '../../model/person';
import { Room } from '../../model/Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  person: Person = {
    Id: null,
    Name: ""
  };

  room: Room = {
    Person: this.person,
    BulbsCount: 20
  };

  bulbs$: Observable<Bulb[]>;
  magicBulbs$: Observable<Bulb[]>;
  onLightsCount: Number = 0;
  onMagicLightsCount: Number = 0;
  displayedColumns: string[] = ['Id', 'OnOff'];
  isLoadingResults = false;
  
  //used BehaviorSubject to be able to render room lights initially by passing inital person to the Observer. otherwise I have to initial 100 light bulbs first and then handle person enter event. 
  private lightBulbSubjects = new BehaviorSubject<Room>(this.room);
  
  constructor(private peronBulbService: PersonBulbService) { }


  // Push to Observable stream.
  enterRoom(room: Room): void {
    this.isLoadingResults = true;
    this.lightBulbSubjects.next(room);
  
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
          let bulbs = this.peronBulbService.enterRoom(new Room(magicPerson, 100));
          this.magicBulbs$ = bulbs.BulbList;
          this.onMagicLightsCount = bulbs.Count;
        });
      });
  }

  ngOnInit(): void {
    this.bulbs$ = this.magicBulbs$ = this.lightBulbSubjects.asObservable().pipe(
      // wait 500ms
      debounceTime(500),

      switchMap((room: Room) => { 
        let result = this.peronBulbService.enterRoom(room).BulbList;
        this.isLoadingResults = false;
        return result;
      }),
    );
  }

  getOnOffIcons(status): string {
    return (status) ? "" : "_outline_blank";
  }
}
