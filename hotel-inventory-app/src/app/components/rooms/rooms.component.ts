import { HttpEventType } from '@angular/common/http';
import { Component,DoCheck,OnDestroy, OnInit,AfterViewInit, ViewChild, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { catchError, Observable, of, Subscription,Subject,map } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,DoCheck,AfterViewChecked {
    numberOfRooms = 10
    hotelName = 'Ibukunoluwa Hotels'
    hideRooms = false 
    selectedRoom!:RoomList
    subscription!:Subscription
    rooms :Room = {
      totalRooms:10,
      availableRooms:10,
      bookedRooms:5,
      roomid:1
    }
roomlist :RoomList[] = []
stream = new Observable<string>(observer => {
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  // observer.error(error =>)
})

totalBytes = 0


error$ = new Subject<string>() 

getError$ = this.error$.asObservable()

room$ = this.roomsService.getRooms$.pipe(
  catchError((err) => {
    console.log(err)
    this.error$.next(err.message) 
    return of([])
  })
)
roomsCount$ = this.roomsService.getRooms$.pipe(
  map((rooms) => rooms.length)
)



@ViewChild(HeaderComponent, {static:true}) headerComponent!:HeaderComponent;


@ViewChildren(HeaderComponent)headerChildrenComponent!: QueryList<HeaderComponent> 

title!:string;
  constructor(private roomsService : RoomsService){
  }
      ngOnInit(): void {
          this.roomsService.getPhotos().subscribe((event)=> {
              switch(event.type) {
                case HttpEventType.Sent: {
                  console.log('Request has been made')
                  break
                }
                case HttpEventType.ResponseHeader: {
                  console.log('Response header has been received')
                  break 
                }
                case HttpEventType.DownloadProgress: {
                  console.log('Download in progress')
                  // this.totalBytes += event.total  
                  // console.log(event.total)
                  break
                }
                case HttpEventType.Response: {
                    console.log(event.body)
                    break 
                }
              }
              console.log(this.room$);
          })
            this.stream.subscribe((data)=> console.log(data))
            this.stream.subscribe({
                next:(value) => console.log(value),
                complete:() => console.log('complete'),
                error:(err) => console.log(err)
              })
            // this.roomsService.getRooms$.subscribe((rooms) => { this.roomlist = rooms ;console.log(rooms)} )
            // console.log(this.headerComponent) 
      }
      ngDoCheck(): void {
        console.log('onchanges is called')
      }
      ngAfterViewInit():void {
          console.log(this.headerComponent)
          console.log(this.headerChildrenComponent)
          this.headerChildrenComponent.last.title = 'Last Title' // not working
          this.headerChildrenComponent.destroy; // not working 
      }
      ngAfterViewChecked(): void {
        // this.headerComponent.title = "Rooms view"
      }
      // ngOnDestroy() {
      //     if (this.subscription) {
      //       this.subscription.unsubscribe()
      //     }
      // }
      toggle () {
        this.hideRooms = !this.hideRooms
        this.title = 'Rooms List'
      }
      selectRoom(room:RoomList) {
        // console.log(room)
        this.selectedRoom = room 
      }
      editRoom() {
        const room:RoomList =  {
        roomNumber: '53',
        roomType:'Private Suite',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4
      }
       this.roomsService.editRoom(room).subscribe((data) => {
         this.roomlist = data;
       });
     }
    addRoom () {
      const room: RoomList = {
        roomNumber: '53',
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating: 4,
      };
      this.roomsService.addRoom(room).subscribe((data) => {
        this.roomlist = data;
      });
      // this.roomlist.push(room)
      // this.roomlist = [...this.roomlist,room]
    }
      deleteRoom() {
        this.roomsService.deleteRoom('3').subscribe((data)=> {
          this.roomlist = data 
        })
      }
    
}

