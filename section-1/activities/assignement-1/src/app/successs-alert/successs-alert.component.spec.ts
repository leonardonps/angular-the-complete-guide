import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesssAlertComponent } from './successs-alert.component';

describe('SuccesssAlertComponent', () => {
  let component: SuccesssAlertComponent;
  let fixture: ComponentFixture<SuccesssAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesssAlertComponent]
    });
    fixture = TestBed.createComponent(SuccesssAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
