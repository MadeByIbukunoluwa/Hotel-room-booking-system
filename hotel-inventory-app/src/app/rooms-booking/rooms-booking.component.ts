import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0 ;
  // id$!: Observable<number>;
  // id$ = this.router.params.pipe(map((params) => params['id']));
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')))
  
  constructor(private router: ActivatedRoute) {}
  //Use the ActivatedRoute Data
  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    //   // console.log(this.id)
    //   // console.log(params)
    // });
  }
}
