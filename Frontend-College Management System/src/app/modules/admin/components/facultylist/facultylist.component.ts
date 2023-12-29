import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/faculty';
import { FacultyService } from 'src/app/faculty.service';

@Component({
  selector: 'app-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
  facultys!:Faculty[];
  constructor(private facultyService:FacultyService,private router:Router)
  {}
  ngOnInit(): void {
    this.getFacultys();
  }
  private getFacultys()
  {
    this.facultyService.getFacultyList().subscribe(data=>
      {
        this.facultys=data;
      });
    }
    facultyDetails(id:number)
    {
      this.router.navigate(['facultydetails',id]);
    }
    updateFaculty(id:number)
    {
      this.router.navigate(['updatefaculty',id]);
    }
    deleteFaculty(id:number)
    {
      this.facultyService.deleteFaculty(id).subscribe((data:any)=>
        {
          console.log(data);
          this.getFacultys();
        })
    }
   /* constructor(private facultyService:FacultyService,private router:Router)
    {}

    facultys :Faculty[]=[];
    ngOnInit():void{
      this.facultyService.getAllFaculty().subscribe(data=>{
        this.facultys=data;
      })
    }
    updateFaculty(id:number){
      console.log(id);
      this.router.navigate(['updatefaculty',id]);
    }*/
}
