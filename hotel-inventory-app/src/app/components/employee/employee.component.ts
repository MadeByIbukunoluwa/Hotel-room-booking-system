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
  constructor(@Self() private roomService : RoomsService) {
  }
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent
  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
      console.log(this.employee)
      this.employee.empname = 'spartacus'
  }
}
