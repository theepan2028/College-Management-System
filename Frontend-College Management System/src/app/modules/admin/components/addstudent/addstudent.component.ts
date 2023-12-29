import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit{
 /* student:Student=new Student();
  constructor(private studentService:StudentService,private router:Router)
  {}
  ngOnInit(): void{
  
  }
  saveStudent()
  {
    this.studentService['createStudent'](this.student).subscribe((data: any)=>
    {
      console.log(data);
      alert("Student added Successfully");
      this.goToStudentList();
    },
    (error:any)=>console.log(error)
    );
  }
  goToStudentList()
  {
    this.router.navigate(['/students']);
  }
  onSubmit()
  {
    console.log(this.student);
    this.saveStudent();
  }*/
  student:Student=new Student();
  constructor(private studentService:StudentService,private router:Router)
  {}
  ngOnInit(): void{
  
  }
  addStudentData(){
    this.studentService.addStudent(this.student).subscribe(data=>{
      alert("student Data Insert Successfully");

    },error=>alert("sorry unable to insert student data"))
  }
  gotoListofstudentPage(){
    this.router.navigate(['/students']);
  }
  onSubmit()
  {
    console.log(this.student);
    this.addStudentData();
  }
  }
  


