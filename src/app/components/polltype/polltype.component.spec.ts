import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolltypeComponent } from './polltype.component';

describe('PolltypeComponent', () => {
  let component: PolltypeComponent;
  let fixture: ComponentFixture<PolltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
