import { Component,DoCheck,OnInit,AfterViewInit, ViewChild, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
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
    rooms :Room = {
      totalRooms:10,
      availableRooms:10,
      bookedRooms:5,
      roomid:1
    }
roomlist :RoomList[] = []

@ViewChild(HeaderComponent, {static:true}) headerComponent!:HeaderComponent;


@ViewChildren(HeaderComponent)headerChildrenComponent!: QueryList<HeaderComponent> 

title!:string;
  constructor(){
    
  }
  ngOnInit(): void {
      this.roomlist = [
      {
        roomNumber: 33,
        roomType:'Deluxe Room',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4.7
    },
      {
        roomNumber: 30,
        roomType:'Deluxe Room',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 590,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4.7
    },
      {
        roomNumber: 24,
        roomType:'Deluxe Room',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4.4
    },
      {
        roomNumber: 53,
        roomType:'Private Suite',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4
    },

  ]
console.log(this.headerComponent) 
  }
      ngDoCheck(): void {
        console.log('onchangs is called')
      }
      ngAfterViewInit():void {
          console.log(this.headerComponent)
          console.log(this.headerChildrenComponent)
          this.headerChildrenComponent.last.title = 'Last Title' // not working
          this.headerChildrenComponent.destroy; // not working 
      }
      ngAfterViewChecked(): void {
        this.headerComponent.title = "Rooms view"
      }
      toggle () {
        this.hideRooms = !this.hideRooms
        this.title = 'Rooms List'
      }
      selectRoom(room:RoomList) {
        // console.log(room)
        this.selectedRoom = room 
      }
      addRoom() {
        const room:RoomList =  {
        roomNumber: 53,
        roomType:'Private Suite',
        amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos : '',
        checkinTime: new Date('25-Nov-2022'),
        checkoutTime: new Date('26-Nov-2022'),
        rating:4
    }
    // this.roomlist.push(room)
    this.roomlist = [...this.roomlist,room]
}

}
