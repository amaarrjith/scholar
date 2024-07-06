import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecteditComponent } from './subjectedit.component';

describe('SubjecteditComponent', () => {
  let component: SubjecteditComponent;
  let fixture: ComponentFixture<SubjecteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjecteditComponent]
    });
    fixture = TestBed.createComponent(SubjecteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
