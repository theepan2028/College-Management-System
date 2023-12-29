import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/attendance';
import { AttendanceService } from 'src/app/attendance.service';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.css']
})
export class AttendancelistComponent implements OnInit {
  attendances!:Attendance[];
  constructor(private attendanceService:AttendanceService,private router:Router)
  {}
  ngOnInit(): void {
    this.getAttendances();
  }
  private getAttendances()
  {
    this.attendanceService.getAttendanceList().subscribe(data=>
      {
        this.attendances=data;
      });
    }
    attendanceDetails(id:number)
    {
      this.router.navigate(['attendancedetails',id]);
    }
    updateAttendance(id:number)
    {
      this.router.navigate(['updateattendance',id]);
    }
    deleteAttendance(id:number)
    {
      this.attendanceService.deleteAttendance(id).subscribe((data:any)=>
        {
          console.log(data);
          this.getAttendances();
        })
    }

}
