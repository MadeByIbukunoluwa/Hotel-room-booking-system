import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, //Default Route
  { path: '**', component: NotfoundComponent }, //404 page

  //redirect to the rooms page whenever the user visits the site
  // {path:'container',component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
