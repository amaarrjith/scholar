import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmasterComponent } from './staffmaster.component';

describe('StaffmasterComponent', () => {
  let component: StaffmasterComponent;
  let fixture: ComponentFixture<StaffmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffmasterComponent]
    });
    fixture = TestBed.createComponent(StaffmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
