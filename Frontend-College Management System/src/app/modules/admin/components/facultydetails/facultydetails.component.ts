import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/faculty.service';

@Component({
  selector: 'app-facultydetails',
  templateUrl: './facultydetails.component.html',
  styleUrls: ['./facultydetails.component.css']
})
export class FacultydetailsComponent {
  id!:number;
  faculty!:Faculty;
  constructor(private facultyService:FacultyService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.faculty=new Faculty();
    this.facultyService['getFacultyById'](this.id).subscribe((data:Faculty)=>
    {
      this.faculty=data;
    });
  }
}
