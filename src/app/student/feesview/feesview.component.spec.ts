import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesviewComponent } from './feesview.component';

describe('FeesviewComponent', () => {
  let component: FeesviewComponent;
  let fixture: ComponentFixture<FeesviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesviewComponent]
    });
    fixture = TestBed.createComponent(FeesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
