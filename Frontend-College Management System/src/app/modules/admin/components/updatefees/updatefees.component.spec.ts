import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefeesComponent } from './updatefees.component';

describe('UpdatefeesComponent', () => {
  let component: UpdatefeesComponent;
  let fixture: ComponentFixture<UpdatefeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefeesComponent]
    });
    fixture = TestBed.createComponent(UpdatefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
