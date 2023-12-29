import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/faculty.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit{
  faculty:Faculty=new Faculty();
  constructor(private facultyService:FacultyService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveFaculty()
  {
    this.facultyService['addFaculty'](this.faculty).subscribe((data: any)=>
    {
      console.log(data);
      alert("Student added Successfully");
      this.goToFacultyList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToFacultyList()
  {
    this.router.navigate(['/facultys']);
  }
  onSubmit()
  {
    console.log(this.faculty);
    this.saveFaculty();
  }
}


