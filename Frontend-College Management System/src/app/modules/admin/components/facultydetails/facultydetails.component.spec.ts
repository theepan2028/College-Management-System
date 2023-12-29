import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydetailsComponent } from './facultydetails.component';

describe('FacultydetailsComponent', () => {
  let component: FacultydetailsComponent;
  let fixture: ComponentFixture<FacultydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultydetailsComponent]
    });
    fixture = TestBed.createComponent(FacultydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
