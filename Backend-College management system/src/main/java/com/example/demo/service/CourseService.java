package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Course;




	public interface CourseService {
		Course saveCourse(Course course);
	    List<Course> getAllCourses();
	    Course getCourseById(long id);
	    Course updateCourse(long id, Course course);
	    void deleteCourse(long id);
	}


