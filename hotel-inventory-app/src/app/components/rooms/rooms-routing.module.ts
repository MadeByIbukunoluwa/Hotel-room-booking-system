import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomGuard } from './guards/room.guard';


const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    // canActivateChild:[RoomGuard],
    //nested child route
    children: [
      { path: 'add', component: RoomAddComponent },
      //if i keep the :id path first, it will always match to room/add
      { path: ':id', component: RoomsBookingComponent },
      //for some reason, these routes are not realtive or even children to the rooms path/route or their parent in shirt,
      //so when i clicked on the dynamic route, that is :/id it weas always the component bing displayed when i clicked on the booking route which is
      // relative to the home page 
    ], //Dynamic Route
  },
  // { path: 'rooms/add', component: RoomAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule { }
