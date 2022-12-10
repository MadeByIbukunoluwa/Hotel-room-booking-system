import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoggerService } from './logger.service';
import {LocalStorageToken} from './localstorage.token'
import { ConfigService } from './components/services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
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

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage:Storage,
  private configService: ConfigService,
  private router : Router) {

  }
  // @ViewChild(`name`,{static:true}) name!:ElementRef;

  // @ViewChild(`user`,{read:ViewContainerRef}) vcr!:ViewContainerRef 
  // ngAfterViewInit(): void {
  //   const componentRef  = this.vcr.createComponent(RoomsComponent) 
  //   componentRef.instance
  // }
 
ngOnInit() {
  // this.router.events.subscribe((event)=> {
  //   console.log(event)
  // })
  this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)).subscribe((event) => {
        console.log('Navigation Started')
      }
    )
  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      console.log('Navigation Ended')
    }
  );

  this.loggerService?.log(`AppComponent.ngOnInit()`)
  // this.name.nativeElement.innerText = 'Ibukunoluwa Hotel'
  this.localStorage.setItem('name','Ibukunoluwa Hotel')
}

}
