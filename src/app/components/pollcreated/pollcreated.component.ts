import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollcreated',
  templateUrl: './pollcreated.component.html',
  styleUrls: ['./pollcreated.component.css']
})
export class PollcreatedComponent implements OnInit {

  randomInt(){
    Math.random();
  }
  constructor() { }

  ngOnInit() {
  }

}
