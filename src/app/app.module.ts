import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './home/room/room.component';
import { PersonBulbService } from './service/person-bulb.service';
import { NozeroDirective } from './directives/nozero.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAppModule } from './mat-module/mat-app.module';

//I have not created sub modules to enable lazy loading since this is a very smaill application demo 
//but in larger projects creating sub modules are desireable to enable lazy loading (based on application nature).
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    NozeroDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAppModule
  ],
  providers: [PersonBulbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
