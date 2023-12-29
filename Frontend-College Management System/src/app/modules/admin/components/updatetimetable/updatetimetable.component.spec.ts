import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetimetableComponent } from './updatetimetable.component';

describe('UpdatetimetableComponent', () => {
  let component: UpdatetimetableComponent;
  let fixture: ComponentFixture<UpdatetimetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatetimetableComponent]
    });
    fixture = TestBed.createComponent(UpdatetimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
