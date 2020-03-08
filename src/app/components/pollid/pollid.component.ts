import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollid',
  templateUrl: './pollid.component.html',
  styleUrls: ['./pollid.component.css']
})
export class PollidComponent implements OnInit {

   myFunction() {
    var x = Math.floor((Math.random() * 10) + 1);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
