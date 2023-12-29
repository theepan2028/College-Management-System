import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent {
  id!:number;
  course!:Course;
  constructor(private courseService:CourseService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.course=new Course();
    this.courseService['getCourseById'](this.id).subscribe((data:Course)=>
    {
      this.course=data;
    });
  }
}
