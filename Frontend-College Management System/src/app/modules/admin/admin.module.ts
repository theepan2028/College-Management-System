import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


import { AddstudentComponent } from './components/addstudent/addstudent.component';

import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';


import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

import { AddfacultyComponent } from './components/addfaculty/addfaculty.component';
import { FacultydetailsComponent } from './components/facultydetails/facultydetails.component';
import { FacultylistComponent } from './components/facultylist/facultylist.component';
import { UpdatefacultyComponent } from './components/updatefaculty/updatefaculty.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UpdatecourseComponent } from './components/updatecourse/updatecourse.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { AddfeesComponent } from './components/addfees/addfees.component';
import { UpdatefeesComponent } from './components/updatefees/updatefees.component';
import { FeeslistComponent } from './components/feeslist/feeslist.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';
import { AddtimetableComponent } from './components/addtimetable/addtimetable.component';

import { AddattendanceComponent } from './components/addattendance/addattendance.component';
import { AttendancedetailsComponent } from './components/attendancedetails/attendancedetails.component';
import { AttendancelistComponent } from './components/attendancelist/attendancelist.component';
import { UpdateattendanceComponent } from './components/updateattendance/updateattendance.component';
import { UpdatetimetableComponent } from './components/updatetimetable/updatetimetable.component';
import { TimetablelistComponent } from './components/timetablelist/timetablelist.component';
import { TimetabledetailsComponent } from './components/timetabledetails/timetabledetails.component';


//import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddstudentComponent,
   
    StudentlistComponent,
    UpdatestudentComponent,
    StudentdetailsComponent,
   
    AddfacultyComponent,
    FacultydetailsComponent,
    FacultylistComponent,
    UpdatefacultyComponent,
    AddcourseComponent,
    UpdatecourseComponent,
    CourselistComponent,
    CoursedetailsComponent,
    AddfeesComponent,
    UpdatefeesComponent,
    FeeslistComponent,
    FeesdetailsComponent,
    AddtimetableComponent,
    
    AddattendanceComponent,
    AttendancedetailsComponent,
    AttendancelistComponent,
    UpdateattendanceComponent,
    UpdatetimetableComponent,
    TimetablelistComponent,
    TimetabledetailsComponent,
   
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule,

  ]
})
export class AdminModule { }
