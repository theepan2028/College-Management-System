import { Component, OnInit } from '@angular/core';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
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
