import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimetableComponent } from './addtimetable.component';

describe('AddtimetableComponent', () => {
  let component: AddtimetableComponent;
  let fixture: ComponentFixture<AddtimetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtimetableComponent]
    });
    fixture = TestBed.createComponent(AddtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
