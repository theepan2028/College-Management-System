import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultylistComponent } from './facultylist.component';

describe('FacultylistComponent', () => {
  let component: FacultylistComponent;
  let fixture: ComponentFixture<FacultylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultylistComponent]
    });
    fixture = TestBed.createComponent(FacultylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
