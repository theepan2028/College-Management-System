import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetabledetailsComponent } from './timetabledetails.component';

describe('TimetabledetailsComponent', () => {
  let component: TimetabledetailsComponent;
  let fixture: ComponentFixture<TimetabledetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetabledetailsComponent]
    });
    fixture = TestBed.createComponent(TimetabledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
