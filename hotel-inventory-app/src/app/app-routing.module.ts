import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { RoomAddComponent } from './components/room-add/room-add.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  {path:'rooms/add', component:RoomAddComponent} ,
  {path:'rooms/:id',component:RoomsBookingComponent},//Dynamic Route 
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },//Default Route
  { path: '**', component: NotfoundComponent },//404 page 

  //redirect to the rooms page whenever the user visits the site
  // {path:'container',component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
