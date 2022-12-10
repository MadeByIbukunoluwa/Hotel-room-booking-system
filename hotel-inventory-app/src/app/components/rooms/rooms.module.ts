import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { HeaderModule } from '../header/header.module';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from 'src/app/components/rooms/rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';
import { RouteConfigToken } from '../services/routeConfig.service';

@NgModule({
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
  ],
  providers:[
    {
      provide:RouteConfigToken,
      useValue:{title:'Home'}
    }
  ]
})
export class RoomsModule {}
