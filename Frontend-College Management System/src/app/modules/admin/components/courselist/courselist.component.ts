import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
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
