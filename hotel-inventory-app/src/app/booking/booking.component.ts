import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { isThisTypeNode } from 'typescript';
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
      roomId: '2',
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: [''],
        City: ['', { validators: [Validators.required] }],
        State: ['', { validators: [Validators.required] }],
        Country: [''],
        ZipCode: [''],
        Count: [''], //Dont know why this is here will fix later 
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('') }),
        // tnc:new FormControl(false,{validators:[Validators.requiredTrue]})
      ]),
    });
  this.getBookingData()
  }

  addBooking() {
      console.log(this.bookingForm.getRawValue)
      this.bookingForm.reset({
        roomId: '2',
        guestEmail: '',
        checkinDate: '',
        checkoutDate: '',
        bookingDate: '',
        bookingStatus: '',
        bookingAmount: '',
        mobileNumber: '',
        guestName: '',
        address: {
          addressLine1: '',
          addressLine2: '',
          City: '',
          State: '',
          Country: '',
          ZipCode: '',
          Count:''
        },
      });
      this.getBookingData()
  }

getBookingData() {
  this.bookingForm.setValue(
    {
        roomId: '2',
        guestEmail: 'test@gmail.com',
        checkinDate: new Date('10-12-2022'),
        checkoutDate: '',
        bookingDate: '',
        bookingStatus: '',
        bookingAmount: '',
        mobileNumber: '',
        guestName: '',
        address: {
          addressLine1: '',
          addressLine2: '',
          City: '',
          State: '',
          Country: '',
          ZipCode: '',
          Count:''
        },
  })
}


  addGuest () {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }
  removeGuest(i:number) {
    return this.guests.removeAt(i)
  }
  addPassport() {
    this.bookingForm.addControl('passport',new FormControl(''))
  }
  deletePassport() {
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport')
    }
  }
}
