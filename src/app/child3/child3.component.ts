import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message:string = "this is a message"

  @Output() messageEvent = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
