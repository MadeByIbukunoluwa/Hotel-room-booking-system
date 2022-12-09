import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { HeaderModule } from '../header/header.module';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from 'src/app/components/rooms/rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
})
export class RoomsModule {}
