package com.example.demo.service;

import java.util.List;

import javax.management.relation.RelationNotFoundException;
import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Student;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.StudentRepo;


@Service
public class StudentServiceIMP implements StudentService {
	@Autowired
	private StudentRepo studentRepo;
	public StudentServiceIMP(StudentRepo studentRepo) {
		super();
		this.studentRepo=studentRepo;
	}
	@Override
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}
	@Override
	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}
	@Override
	public Student getStudentById(int id) {
		//return studentRepo.getById(id).orElseThrow(()-> new EntityNotFoundException("Student not found with ID:" + id));
		return studentRepo.findById(id).orElseThrow(()-> new EntityNotFoundException("student not found with ID:"+ id));
	}
	@Override
	public Student updateStudent(int id, Student student) {
		Student existingStudent =getStudentById(id);
		existingStudent.setFirstname(student.getFirstname());
		existingStudent.setLastname(student.getLastname());
		existingStudent.setDob(student.getDob());
		existingStudent.setAge(student.getAge());
		existingStudent.setGender(student.getMobile());
		existingStudent.setMobile(student.getMobile());
		existingStudent.setAddress(student.getAddress());
		existingStudent.setCourseName(student.getCourseName());
		existingStudent.setBranch(student.getBranch());
		existingStudent.setYear(student.getYear());
		existingStudent.setEnrollmentDate(student.getEnrollmentDate());
		existingStudent.setRollNumber(student.getRollNumber());
		existingStudent.setEmail(student.getEmail());
		return studentRepo.save(existingStudent);
	}
	@Override
	public void deleteStudent(int id) {
		studentRepo.findById(id).orElseThrow(()-> new ResourceNotFound("Timetable","Id", "id"));
		studentRepo.deleteById(id);
		
	}
	
	
	
	}
	/*@Override
	public Student saveStudent(Student student) {
		
		return studentRepo.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		
		return studentRepo.findAll();
	}

	@Override
	public Student getStudentById(long id) {
		// TODO Auto-generated method stub
		return studentRepo.findById(id).orElseThrow(()-> new EntityNotFoundException("Student not found with ID:" + id));
	}

	

	@Override
	public Student updateStudent(long id, Student student) {
		Student existingStudent =getStudentById(id);
		existingStudent.setFirstname(student.getFirstname());
		existingStudent.setLastname(student.getLastname());
		existingStudent.setDob(student.getDob());
		existingStudent.setEmail(student.getEmail());
		existingStudent.setPhoneNumber(student.getPhoneNumber());
		existingStudent.setAddress(student.getAddress());
		return studentRepository.save(existingStudent);
	}

	@Override
	public void deleteStudent(long id) {
		studentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Student", "Id", "id"));
		studentRepository.deleteById(id);
		
	}}*/

	
	
