import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolleventComponent } from './pollevent.component';

describe('PolleventComponent', () => {
  let component: PolleventComponent;
  let fixture: ComponentFixture<PolleventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolleventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
