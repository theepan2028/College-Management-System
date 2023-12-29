package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.StudententityDTO;
import com.example.demo.entity.Student;
import com.example.demo.response.Login;

public interface StudententityService {
	String addStudent(StudententityDTO studentDTO);
	public Login loginStudent(LoginDTO loginDTO); 
	
	/*Student saveStudent(Student student);
	List<Student> getAllStudents();
    Student getStudentById(long id);
    Student updateStudent( long id, Student student);
    void deleteStudent(long id);*/

}
