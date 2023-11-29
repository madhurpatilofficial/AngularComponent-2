import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  // @Input() childMessage: string=""
  @Input()childMessage: any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
