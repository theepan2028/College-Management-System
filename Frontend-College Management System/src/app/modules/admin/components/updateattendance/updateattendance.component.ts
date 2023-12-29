import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendance } from 'src/app/attendance';
import { AttendanceService } from 'src/app/attendance.service';

@Component({
  selector: 'app-updateattendance',
  templateUrl: './updateattendance.component.html',
  styleUrls: ['./updateattendance.component.css']
})
export class UpdateattendanceComponent implements OnInit {
  id!:number;
  attendance:Attendance=new Attendance();
  constructor(private attendanceService:AttendanceService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.attendanceService['getAttendanceById'](this.id).subscribe((data:Attendance)=>
  {
    this.attendance=data;
  },(error:any)=>console.log(error));
  }
  
  onSubmit()
  {
    this.attendanceService['updateAttendance'](this.id,this.attendance).subscribe((data:any)=>{
      this.goToAttendanceList();
    },(error:any)=>console.log(error));
  
  }

  goToAttendanceList()
  {
    this.router.navigate(['/attendances']);
  } 

}
