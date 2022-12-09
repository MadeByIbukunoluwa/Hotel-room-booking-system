import { Component, ContentChild,OnInit,AfterContentInit,Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomsService]
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  empname: string = 'Horatio';
  constructor( private roomService : RoomsService) {
  }
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent
  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    this.employee.empname = 'spartacus'
    console.log(this.employee)
  }
}
