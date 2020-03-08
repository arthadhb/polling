import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollcreatedComponent } from './pollcreated.component';

describe('PollcreatedComponent', () => {
  let component: PollcreatedComponent;
  let fixture: ComponentFixture<PollcreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollcreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
