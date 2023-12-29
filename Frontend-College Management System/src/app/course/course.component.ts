import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!:Course[];
  constructor(private courseService:CourseService,private router:Router)
  {}
  ngOnInit(): void {
    this.getCourses();
  }
  private getCourses()
  {
    this.courseService.getCourseList().subscribe(data=>
      {
        this.courses=data;
      });
    }
    courseDetails(id:number)
    {
      this.router.navigate(['coursedetails',id]);
    }
    updateCourse(id:number)
    {
      this.router.navigate(['updatecourse',id]);
    }
    deleteCourse(id:number)
    {
      this.courseService.deleteCourse(id).subscribe((data:any)=>
        {
          console.log(data);
          this.getCourses();
        })
    }


}
