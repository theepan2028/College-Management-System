import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/attendance';
import { AttendanceService } from 'src/app/attendance.service';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent implements OnInit{
  attendance:Attendance=new Attendance();
  constructor(private attendanceService:AttendanceService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveAttendance()
  {
    this.attendanceService['addAttendance'](this.attendance).subscribe((data: any)=>
    {
      console.log(data);
      alert("Attendance added Successfully");
      this.goToAttendanceList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToAttendanceList()
  {
    this.router.navigate(['/attendances']);
  }
  onSubmit()
  {
    console.log(this.attendance);
    this.saveAttendance();
  }

}
