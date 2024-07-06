import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosefeeComponent } from './choosefee.component';

describe('ChoosefeeComponent', () => {
  let component: ChoosefeeComponent;
  let fixture: ComponentFixture<ChoosefeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosefeeComponent]
    });
    fixture = TestBed.createComponent(ChoosefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
