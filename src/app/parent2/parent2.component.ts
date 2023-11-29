import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Child2Component} from '../child2/child2.component'

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {


  @ViewChild(Child2Component) child:any;
custDetails: any[]=[];


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.custDetails = this.child.customerDetails;

}
}