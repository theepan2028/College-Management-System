import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  id!:number;
  course:Course=new Course();
  constructor(private courseService:CourseService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.courseService['getCourseById'](this.id).subscribe((data:Course)=>
  {
    this.course=data;
  },(error:any)=>console.log(error));
  }
  onSubmit()
  {
    this.courseService['updateCourse'](this.id,this.course).subscribe((data:any)=>{
      this.goToCourseList();
    },(error:any)=>console.log(error));
  
  }

  goToCourseList()
  {
    this.router.navigate(['/courses']);
  } 

}
