import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray } from '@angular/forms';
import { ConfigService } from '../components/services/config.service';
@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(private configService: ConfigService,private fb:FormBuilder) {}
  bookingForm!:FormGroup 
  get guests()  {
    return this.bookingForm.get('guests') as FormArray
   }
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
        roomId:  new FormControl({value:'2',disabled:true}),
        guestEmail:  [''],
        checkinDate:[''],
        checkoutDate:[''],
        bookingDate:  [''],
        bookingStatus:  [''],
        bookingAmount:  [''],
        mobileNumber: [''],
        guestName:  [''],
        address: this.fb.group({
          addressLine1:[''],
          addressLine2:[''],
            City: [''],
            State: [''],
            Country: [''],
            ZipCode: [''],
            Count:  [''],
          }),
        guests : this.fb.array([
          this.fb.group({guestName:[''],age: new FormControl('')})
        ])
    })
  }

  addBooking() {
      console.log(this.bookingForm.value)
  }
  addGuest () {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }
}
