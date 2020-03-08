import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(0, 244, 235,0.5)';
  }

}
