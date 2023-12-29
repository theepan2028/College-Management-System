import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timetable } from 'src/app/timetable';
import { TimetableService } from 'src/app/timetable.service';

@Component({
  selector: 'app-updatetimetable',
  templateUrl: './updatetimetable.component.html',
  styleUrls: ['./updatetimetable.component.css']
})
export class UpdatetimetableComponent implements OnInit {
  id!:number;
  timetable:Timetable=new Timetable();
  constructor(private timetableService:TimetableService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.timetableService['getTimetableById'](this.id).subscribe((data:Timetable)=>
  {
    this.timetable=data;
  },(error:any)=>console.log(error));
  }
  onSubmit()
  {
    this.timetableService['updateTimetable'](this.id,this.timetable).subscribe((data:any)=>{
      this.goToTimetableList();
    },(error:any)=>console.log(error));
  
  }

  goToTimetableList()
  {
    this.router.navigate(['/timetables']);
  } 

  
}
