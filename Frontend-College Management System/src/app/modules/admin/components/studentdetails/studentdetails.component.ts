import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  id!:number;
  student!:Student;
  constructor(private studentService:StudentService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.student=new Student();
    this.studentService['getStudentById'](this.id).subscribe((data:Student)=>
    {
      this.student=data;
    });
  }
}

