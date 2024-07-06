import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffeditComponent } from './staffedit.component';

describe('StaffeditComponent', () => {
  let component: StaffeditComponent;
  let fixture: ComponentFixture<StaffeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffeditComponent]
    });
    fixture = TestBed.createComponent(StaffeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
