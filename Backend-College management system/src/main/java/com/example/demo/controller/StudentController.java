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
import com.example.demo.entity.Student;
import com.example.demo.service.CourseService;
import com.example.demo.service.StudentService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/students")
public class StudentController {
	@Autowired
	public StudentService studentService;
	
		public StudentController(StudentService studentService) {
			super();
			this.studentService=studentService;
		}
	@PostMapping
	public ResponseEntity<Student>saveStudent(@RequestBody Student student)
	{
		return new ResponseEntity<Student>(studentService.saveStudent(student),HttpStatus.CREATED);
	}
	//build getAll learner  RESTAPI
	@GetMapping
	public List<Student>getStudents()
	{
		return studentService.getAllStudents();
	}
	
	//build get single learner RESTAPI
	@GetMapping("{id}")
	public ResponseEntity<Student>getStudentById(@PathVariable("id")int id) // studentId)
	{
		return new ResponseEntity<Student>(studentService.getStudentById(id),HttpStatus.OK);
	}
	@PutMapping("{id}")
	public ResponseEntity<Student>updateStudent(@PathVariable("id")int id,@RequestBody Student student)

	{
		return new ResponseEntity<Student>(studentService.updateStudent(id, student),HttpStatus.OK); 
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String>deleteStudent(@PathVariable("id")int id)
	{
		studentService.deleteStudent(id);
		return new ResponseEntity<String>("Student Deleted...",HttpStatus.OK);
	}
		
}
