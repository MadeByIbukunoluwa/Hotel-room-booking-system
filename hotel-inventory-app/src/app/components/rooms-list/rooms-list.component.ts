import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges {
@Input () rooms:RoomList[] = []
@Output() onSelect = new EventEmitter<RoomList>()
@Input() title!:string;
ngOnChanges(changes: SimpleChanges): void {
  if (changes['title']) {
    this.title = changes['title'].currentValue.toUpperCase()
  }
  console.log(changes)
}
ngOnInit(): void {
  
}

selectRoom(room:RoomList) {
  this.onSelect.emit(room)
}
}
