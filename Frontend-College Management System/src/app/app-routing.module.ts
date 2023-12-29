import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseComponent } from './course/course.component';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlacementsComponent } from './placements/placements.component';
import { AdmissionComponent } from './admission/admission.component';
import { UpdatestudentComponent } from './modules/admin/components/updatestudent/updatestudent.component';
import { Home1Component } from './home1/home1.component';
import { FeesComponent } from './fees/fees.component';
import { CoursedetailsComponent } from './modules/admin/components/coursedetails/coursedetails.component';
import { CourselistComponent } from './modules/admin/components/courselist/courselist.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';





const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home1',pathMatch:'full'},
  /*{path:'home1',component:Home1Component,children: [
  {path: 'aboutus', component: AboutusComponent},
 {path: 'contactus', component: ContactusComponent},
 {path: 'events', component: EventsComponent},
 {path: 'placements', component: PlacementsComponent},
 {path: 'course', component: CourseComponent},
 {path: 'admission', component: AdmissionComponent},
  ]},*/
  
  {path:"home1",component:Home1Component},
{path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
 
  {path:'',redirectTo:'home1',pathMatch:'full'},
  
  
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
 {path: 'events', component: EventsComponent},
 {path: 'placements', component: PlacementsComponent},
 {path: 'courselist', component: CourseComponent},
 {path: 'feeslist', component: FeesComponent},
 {path: 'timetablelist', component: TimetableComponent},
 {path: 'admission', component: AdmissionComponent},
  {path: "admission", component: AdmissionComponent},
  {path:'fees', component : FeesComponent,data: { title:'fees', navigation: false,footer: false}},
  {path:'adminboard',
  loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule),},
  {path:'payment',component:PaymentPageComponent},

 
   
  /*{path:'courselist',component:CourseListComponent},
  {path:'updatestudent/:id',component:UpdatestudentComponent},*/
  //{path:'products',component:ProductComponent},
  
  //{path:'coursedetails/:id',component:CoursedetailsComponent},
  //{path:'contact',component:ContactComponent},




 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
