import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';



@Component({
  selector: 'hinv-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent implements OnInit {
  room:RoomList = {
    roomType:'',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos:'',
    price:0,
    rating:0,
  }
  constructor(private roomsService: RoomsService){

  }
  successMessage: string = ''
  ngOnInit(): void {
    
  }
  AddRoom(roomsForm :NgForm) {
      this.roomsService.addRoom(this.room).subscribe((data)=> {
          this.successMessage = 'Room Added Successfully'
          roomsForm.reset({
            roomType: '',
            amenities: '',
            checkinTime: new Date(),
            checkoutTime: new Date(),
            photos: '',
            price: 0,
            rating: 0,
          });
      })
  }
}
