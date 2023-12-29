import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timetable } from 'src/app/timetable';
import { TimetableService } from 'src/app/timetable.service';

@Component({
  selector: 'app-timetabledetails',
  templateUrl: './timetabledetails.component.html',
  styleUrls: ['./timetabledetails.component.css']
})
export class TimetabledetailsComponent {
  id!:number;
  timetable!:Timetable;
  constructor(private timetableService:TimetableService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.timetable=new Timetable();
    this.timetableService['getTimetableById'](this.id).subscribe((data:Timetable)=>
    {
      this.timetable=data;
    });
  }
}
