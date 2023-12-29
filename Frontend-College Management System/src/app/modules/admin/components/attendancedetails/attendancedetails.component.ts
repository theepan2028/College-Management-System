import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/app/attendance';
import { AttendanceService } from 'src/app/attendance.service';

@Component({
  selector: 'app-attendancedetails',
  templateUrl: './attendancedetails.component.html',
  styleUrls: ['./attendancedetails.component.css']
})
export class AttendancedetailsComponent {
  id!:number;
  attendance!:Attendance;
  constructor(private attendanceService:AttendanceService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.attendance=new Attendance();
    this.attendanceService['getAttendanceById'](this.id).subscribe((data:Attendance)=>
    {
      this.attendance=data;
    });
  }
}
