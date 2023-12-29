import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timetable } from 'src/app/timetable';
import { TimetableService } from 'src/app/timetable.service';

@Component({
  selector: 'app-addtimetable',
  templateUrl: './addtimetable.component.html',
  styleUrls: ['./addtimetable.component.css']
})
export class AddtimetableComponent implements OnInit{
  timetable:Timetable=new Timetable();
  constructor(private timetableService:TimetableService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveTimetable()
  {
    this.timetableService['addTimetable'](this.timetable).subscribe((data: any)=>
    {
      console.log(data);
      alert("Timetable added Successfully");
      this.goToTimetableList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToTimetableList()
  {
    this.router.navigate(['/timetables']);
  }
  onSubmit()
  {
    console.log(this.timetable);
    this.saveTimetable();
  }

}
