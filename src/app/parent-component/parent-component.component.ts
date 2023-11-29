import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  ParentMessage:string="This is important message from parent"


  empDetails: any[]=[
    {
    "id":1,
    "name":"Madhur Patil",
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
