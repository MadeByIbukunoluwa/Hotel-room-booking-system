import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environment/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomlist: RoomList[] = [
    // {
    //   roomNumber: 33,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 500,
    //   photos: '',
    //   checkinTime: new Date('25-Nov-2022'),
    //   checkoutTime: new Date('26-Nov-2022'),
    //   rating: 4.7,
    // },
    // {
    //   roomNumber: 30,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 590,
    //   photos: '',
    //   checkinTime: new Date('25-Nov-2022'),
    //   checkoutTime: new Date('26-Nov-2022'),
    //   rating: 4.7,
    // },
    // {
    //   roomNumber: 24,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 500,
    //   photos: '',
    //   checkinTime: new Date('25-Nov-2022'),
    //   checkoutTime: new Date('26-Nov-2022'),
    //   rating: 4.4,
    // },
    // {
    //   roomNumber: 53,
    //   roomType: 'Private Suite',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 1000,
    //   photos: '',
    //   checkinTime: new Date('25-Nov-2022'),
    //   checkoutTime: new Date('26-Nov-2022'),
    //   rating: 4,
    // },
  ];
  // getRooms$ = this.http.get<RoomList[]>('api/roomsoo')
  // returns a Http failure response for http://localhost:4200/api/roomsoo : 404 Not found
  getRooms$ = this.http.get<RoomList[]>('api/rooms')
  // .pipe(
  //   shareReplay(1)
  // )
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Room services initialized');
  }
  //  headers = new HttpHeaders({'token':'4hfeweoewkxowex39240'})
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room,
    // {headers:this.headers}
    );
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(id:string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',{
      reportProgress:true
    })
    return this.http.request(request)
  }
} 


