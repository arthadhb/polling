import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollidComponent } from './pollid.component';

describe('PollidComponent', () => {
  let component: PollidComponent;
  let fixture: ComponentFixture<PollidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
