import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteditComponent } from './studentedit.component';

describe('StudenteditComponent', () => {
  let component: StudenteditComponent;
  let fixture: ComponentFixture<StudenteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenteditComponent]
    });
    fixture = TestBed.createComponent(StudenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
