import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
/*import { HomeComponent } from 'src/app/home/home.component';*/
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { FacultylistComponent } from './components/facultylist/facultylist.component';
import { AddfacultyComponent } from './components/addfaculty/addfaculty.component';
import { FacultydetailsComponent } from './components/facultydetails/facultydetails.component';
import { UpdatefacultyComponent } from './components/updatefaculty/updatefaculty.component';
import { AddfeesComponent } from './components/addfees/addfees.component';
import { FeeslistComponent } from './components/feeslist/feeslist.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';
import { UpdatefeesComponent } from './components/updatefees/updatefees.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UpdatecourseComponent } from './components/updatecourse/updatecourse.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { TimetablelistComponent } from './components/timetablelist/timetablelist.component';
import { AddtimetableComponent } from './components/addtimetable/addtimetable.component';
import { TimetabledetailsComponent } from './components/timetabledetails/timetabledetails.component';
import { UpdatetimetableComponent } from './components/updatetimetable/updatetimetable.component';
import { AttendancelistComponent } from './components/attendancelist/attendancelist.component';
import { AttendancedetailsComponent } from './components/attendancedetails/attendancedetails.component';
import { UpdateattendanceComponent } from './components/updateattendance/updateattendance.component';
import { AddattendanceComponent } from './components/addattendance/addattendance.component';
import { PaymentPageComponent } from 'src/app/payment-page/payment-page.component';




const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children:[
    
   {path:'students',component:StudentlistComponent},
    
    {path:'addStudent',component:AddstudentComponent},
    {path:'updatestudent/:id',component:UpdatestudentComponent},
    //{path:'update-student/:id',component:UpdateStudentComponent},
    {path:'',redirectTo:'students',pathMatch:'full'},
    
    
   {path:'updatestudent/:id',component:UpdatestudentComponent},
    {path:'studentdetails/:id',component:StudentdetailsComponent},

    {path:'studentdetails',component:StudentlistComponent},
    {path:'updatestudent/:id',component:StudentlistComponent},
    
    {path:'facultys',component:FacultylistComponent},
    {path:'addFaculty',component:AddfacultyComponent},
   // {path:'',redirectTo:'/adminboard/students',pathMatch:'full'},
    {path:'',redirectTo:'facultys',pathMatch:'full'},
    {path:'updatefaculty/:id',component:UpdatefacultyComponent},
    {path:'facultydetails/:id',component:FacultydetailsComponent},

    {path:'facultydetails',component:FacultylistComponent},
    {path:'updatefaculty/:id',component:FacultylistComponent},


    {path:'feess',component:FeeslistComponent},
    {path:'addFees',component:AddfeesComponent},
   // {path:'',redirectTo:'/adminboard/students',pathMatch:'full'},
    {path:'',redirectTo:'feess',pathMatch:'full'},
    {path:'updatefees/:id',component:UpdatefeesComponent},
    {path:'feesdetails/:id',component:FeesdetailsComponent},

    {path:'feesdetails',component:FeeslistComponent},
    {path:'updatefees/:id',component:FeeslistComponent},
         

    {path:'courses',component:CourselistComponent},
    {path:'addCourse',component:AddcourseComponent},
   // {path:'',redirectTo:'/adminboard/students',pathMatch:'full'},
    {path:'',redirectTo:'courses',pathMatch:'full'},
    {path:'updatecourse/:id',component:UpdatecourseComponent},
    {path:'coursedetails/:id',component:CoursedetailsComponent},

    {path:'coursedetails',component:CourselistComponent},
    {path:'updatecourse/:id',component:CourselistComponent},
     

    {path:'timetables',component:TimetablelistComponent},
    {path:'addTimetable',component:AddtimetableComponent},
   // {path:'',redirectTo:'/adminboard/students',pathMatch:'full'},
    {path:'',redirectTo:'timetables',pathMatch:'full'},
    {path:'updatetimetable/:id',component:UpdatetimetableComponent},
    {path:'timetabledetails/:id',component:TimetabledetailsComponent},

    {path:'timetabledetails',component:TimetablelistComponent},
    {path:'updatetimetable/:id',component:TimetablelistComponent},



    {path:'attendances',component:AttendancelistComponent},
    {path:'addAttendance',component:AddattendanceComponent},
   // {path:'',redirectTo:'/adminboard/students',pathMatch:'full'},
    {path:'',redirectTo:'attendances',pathMatch:'full'},
    {path:'updateattendance/:id',component:UpdateattendanceComponent},
    {path:'attendancedetails/:id',component:AttendancedetailsComponent},

    {path:'attendancedetails',component:AttendancelistComponent},
    {path:'updateattendance/:id',component:AttendancelistComponent},
    




    
   
   /*{path:'feesdetails/:id',component:FeesdetailsComponent},
   {path:'add',component:AddfeesComponent},
   {path:'feeslist',component:FeeslistComponent},
   
   {path:'updatefees/:id',component:UpdatefeesComponent},
   {path:'payment',component:PaymentPageComponent}*/
    
  ],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

