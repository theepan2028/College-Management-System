import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{
  /*students!:Student[];
  constructor(private studentService:StudentService,private router:Router)
  {}
  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents()
  {
    this.studentService.getStudentList().subscribe(data=>
      {
        this.students=data;
      });
  }
  studentDetails(id:number)
  {
    this.router.navigate(['studentdetails',id]);
  }
  updateStudent(id:number)
  {
    this.router.navigate(['updatestudent',id]);
  }
  deleteStudent(id:number)
  {
    this.studentService.deleteStudent(id).subscribe(data=>
      {
        console.log(data);
        this.getStudents();
      })
  }*/

 
  constructor(private studentService:StudentService,private router:Router)
  {}
  students : Student[]=[];
  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(data=>{
      this.students=data;
      this.getStudents();
    })
  }
 

 
  private getStudents()
  {
    this.studentService.getStudentList().subscribe(data=>
      {
        this.students=data;
      });
    }
    studentDetails(id:number)
    {
      this.router.navigate(['studentdetails',id]);
    }
    updateStudent(id:number)
   /* {
      this.router.navigate(['updatestudent',id]);
    }*/{
      console.log(id);
      this.router.navigate(['updatestudent',id]);
    }
    deleteStudent(id:number)
    {
      this.studentService.deleteStudent(id).subscribe((data:any)=>
        {
          console.log(data);
          this.getStudents();
        })
    }
}

