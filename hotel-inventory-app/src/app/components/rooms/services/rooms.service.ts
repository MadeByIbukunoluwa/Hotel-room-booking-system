import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomlist :RoomList[]= [
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
  constructor() {
      console.log('Room services initialized')
   }
   getRooms() {
    return this.roomlist 
   }
}
