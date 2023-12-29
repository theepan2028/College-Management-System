import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit{
  course:Course=new Course();
  constructor(private courseService:CourseService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveCourse()
  {
    this.courseService['addCourse'](this.course).subscribe((data: any)=>
    {
      console.log(data);
      this.goToCourseList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToCourseList()
  {
    this.router.navigate(['/courses']);
  }
  onSubmit()
  {
    console.log(this.course);
    this.saveCourse();
  }

}
