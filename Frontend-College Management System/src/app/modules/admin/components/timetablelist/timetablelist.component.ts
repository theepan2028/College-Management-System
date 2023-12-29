import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timetable } from 'src/app/timetable';
import { TimetableService } from 'src/app/timetable.service';

@Component({
  selector: 'app-timetablelist',
  templateUrl: './timetablelist.component.html',
  styleUrls: ['./timetablelist.component.css']
})
export class TimetablelistComponent implements OnInit {
  timetables!:Timetable[];
  constructor(private timetableService:TimetableService,private router:Router)
  {}
  ngOnInit(): void {
    this.getTimetables();
  }
  private getTimetables()
  {
    this.timetableService.getTimetableList().subscribe(data=>
      {
        this.timetables=data;
      });
    }
    timetableDetails(id:number)
    {
      this.router.navigate(['timetabledetails',id]);
    }
    updateTimetable(id:number)
    {
      this.router.navigate(['updatetimetable',id]);
    }
    deleteTimetable(id:number)
    {
      this.timetableService.deleteTimetable(id).subscribe((data:any)=>
        {
          console.log(data);
          this.getTimetables();
        })
    }

}
