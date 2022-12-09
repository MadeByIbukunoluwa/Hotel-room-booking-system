import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';


const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    //nested child route
    children: [
      { path: 'add', component: RoomAddComponent },
      //if i keep the :id path first, it will always match to room/add
      { path: ':id', component: RoomsBookingComponent },
    ], //Dynamic Route
  },
  // { path: 'rooms/add', component: RoomAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
