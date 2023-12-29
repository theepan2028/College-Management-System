import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/faculty.service';

@Component({
  selector: 'app-updatefaculty',
  templateUrl: './updatefaculty.component.html',
  styleUrls: ['./updatefaculty.component.css']
})
export class UpdatefacultyComponent implements OnInit {
  id!:number;
  faculty:Faculty=new Faculty();
  constructor(private facultyService:FacultyService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.facultyService['getFacultyById'](this.id).subscribe((data:Faculty)=>
  {
    this.faculty=data;
  },(error:any)=>console.log(error));
  }
  onSubmit()
  {
    this.facultyService['updateFaculty'](this.id,this.faculty).subscribe((data:any)=>{
      this.goToFacultyList();
    },(error:any)=>console.log(error));
  
  }

  goToFacultyList()
  {
    this.router.navigate(['/facultys']);
  } 

}
