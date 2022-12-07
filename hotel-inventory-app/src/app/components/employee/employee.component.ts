import { Component, ContentChild,OnInit,AfterContentInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  empname: string = 'Horatio';
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent
  constructor() {

  }
  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
      console.log(this.employee)
      this.employee.empname = 'spartacus'
  }
}
