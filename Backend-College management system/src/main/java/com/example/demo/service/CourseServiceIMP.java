package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.CourseRepo;
@Service
public class CourseServiceIMP implements CourseService {
	@Autowired
	private CourseRepo courseRepository;
	
	public CourseServiceIMP(CourseRepo courseRepository) {
		super();
		this.courseRepository = courseRepository;
	}


	@Override
	public Course saveCourse(Course course) {
		
		return courseRepository.save(course) ;
	}


	@Override
	public List<Course> getAllCourses() {
	
		return courseRepository.findAll();
	}

	@Override
	public Course getCourseById(long id) {
		
		return courseRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Course not found with ID:"+id));
	}

	

	@Override
	public Course updateCourse(long id, Course course) {
		Course existingCourse=getCourseById(id);
		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setBranch(course.getBranch());
		existingCourse.setYear(course.getYear());
		existingCourse.setCourseDuration(course.getCourseDuration());
		existingCourse.setLanguage(course.getLanguage());
		existingCourse.setSubjectName(course.getSubjectName());
		existingCourse.setCourseCode(course.getCourseCode());
		existingCourse.setCourseType(course.getCourseType());
		
		return courseRepository.save(existingCourse);
	}

	@Override
	public void deleteCourse(long id) {
		courseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Course","Id", "id"));
		courseRepository.deleteById(id);
		
	}

	
}
