import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hello world from this side</h1>`,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1{color:red}`]
})
export class AppComponent implements OnInit {
 
  title = 'hotel-inventory-app';
  role = 'Admin'


  @ViewChild(`name`,{static:true}) name!:ElementRef;

  // @ViewChild(`user`,{read:ViewContainerRef}) vcr!:ViewContainerRef 
  // ngAfterViewInit(): void {
  //   const componentRef  = this.vcr.createComponent(RoomsComponent) 
  //   componentRef.instance
  // }
 
ngOnInit() {
  this.name.nativeElement
}

}
