import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestchangepasswordComponent } from './guestchangepassword.component';

describe('GuestchangepasswordComponent', () => {
  let component: GuestchangepasswordComponent;
  let fixture: ComponentFixture<GuestchangepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestchangepasswordComponent]
    });
    fixture = TestBed.createComponent(GuestchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
