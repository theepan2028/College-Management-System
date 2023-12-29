package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;
@RestController
@CrossOrigin("*")
@RequestMapping("api/courses")
public class CourseContoller {
	@Autowired
	public CourseService courseService;
	
		public CourseContoller(CourseService courseService) {
			super();
			this.courseService = courseService;
		}
	@PostMapping
	public ResponseEntity<Course>saveCourse(@RequestBody Course course)
	{
		return new ResponseEntity<Course>(courseService.saveCourse(course),HttpStatus.CREATED);
	}
	//build getAll learner  RESTAPI
	@GetMapping
	public List<Course>getCourses()
	{
		return courseService.getAllCourses();
	}
	//build get single learner RESTAPI
	@GetMapping("{id}")
	public ResponseEntity<Course>getCourseById(@PathVariable("id")long courseId)
	{
		return new ResponseEntity<Course>(courseService.getCourseById(courseId),HttpStatus.OK);
	}
	@PutMapping("{id}")
	public ResponseEntity<Course>updateCourse(@PathVariable("id")long id,@RequestBody Course course)

	{
		return new ResponseEntity<Course>(courseService.updateCourse(id, course),HttpStatus.OK); 
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String>deleteCourse(@PathVariable("id")long id)
	{
		courseService.deleteCourse(id);
		return new ResponseEntity<String>("Course Deleted...",HttpStatus.OK);
	}
		

	}



