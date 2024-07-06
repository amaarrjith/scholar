import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectviewComponent } from './subjectview.component';

describe('SubjectviewComponent', () => {
  let component: SubjectviewComponent;
  let fixture: ComponentFixture<SubjectviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectviewComponent]
    });
    fixture = TestBed.createComponent(SubjectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
