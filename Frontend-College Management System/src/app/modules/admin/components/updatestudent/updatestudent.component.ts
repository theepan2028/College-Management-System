import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
 id!:number;
  student:Student=new Student();
  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.studentService['getStudentById'](this.id).subscribe((data:Student)=>
  {
    this.student=data;
  },(error:any)=>console.log(error));
  }
  onSubmit()
  {
    this.studentService['updateStudent'](this.id,this.student).subscribe((data:any)=>{
      alert("Updated successfully")
      this.goToStudentList();
    },(error:any)=>console.log(error));
  
  }

  goToStudentList()
  {
    this.router.navigate(['/students']);
  } 
 /* id!:number;
  student:Student=new Student();
  constructor(private studentService:StudentService,private activeRoute:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.activeRoute.snapshot.params['id'];
  console.log(this.id);
  this.studentService.getStudentById(this.id).subscribe(data=>{
  
    this.student=data;
 
  });
}
updateStudentData(){
this.studentService.updateStudentData(this.student).subscribe(data=>{
  alert("updated successfully");
  this.router.navigate(['/students']);
})
}
onSubmit()
  {
    this.studentService['updateStudent'](this.id,this.student).subscribe((data:any)=>{
      alert("Updated successfully")
      this.goToStudentList();
    },(error:any)=>console.log(error));
  
  }

  goToStudentList()
  {
    this.router.navigate(['/students']);
  }*/
}


