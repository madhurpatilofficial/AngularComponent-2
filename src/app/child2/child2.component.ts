import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  
  customerDetails: any[]=[
    {
    "id":1,
    "name":"Bunty Patil",
    "email":"m@madhurpatil.com"
  },
  {
    "id":2,
    "name":"Vipul",
    "email":"v@vipul.com"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
