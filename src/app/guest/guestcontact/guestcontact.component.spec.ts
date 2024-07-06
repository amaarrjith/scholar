import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestcontactComponent } from './guestcontact.component';

describe('GuestcontactComponent', () => {
  let component: GuestcontactComponent;
  let fixture: ComponentFixture<GuestcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestcontactComponent]
    });
    fixture = TestBed.createComponent(GuestcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
