import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesdetailsComponent } from './feesdetails.component';

describe('FeesdetailsComponent', () => {
  let component: FeesdetailsComponent;
  let fixture: ComponentFixture<FeesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesdetailsComponent]
    });
    fixture = TestBed.createComponent(FeesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
