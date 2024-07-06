import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagestaffComponent } from './messagestaff.component';

describe('MessagestaffComponent', () => {
  let component: MessagestaffComponent;
  let fixture: ComponentFixture<MessagestaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagestaffComponent]
    });
    fixture = TestBed.createComponent(MessagestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
