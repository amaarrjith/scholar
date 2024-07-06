import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStudentComponent } from './events-student.component';

describe('EventsStudentComponent', () => {
  let component: EventsStudentComponent;
  let fixture: ComponentFixture<EventsStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsStudentComponent]
    });
    fixture = TestBed.createComponent(EventsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
