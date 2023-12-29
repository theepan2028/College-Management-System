package com.example.demo.service;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.StudententityDTO;
import com.example.demo.entity.Student;
import com.example.demo.entity.Studententity;
import com.example.demo.repository.StudentRepo;
import com.example.demo.repository.StudententityRepo;
import com.example.demo.response.Login;
@Service
public class StudententityServiceIMP implements StudententityService {
	@Autowired
	private StudententityRepo studentRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	


	@Override
	public String addStudent(StudententityDTO studentDTO) {
		Studententity student=new Studententity(
				studentDTO.getId(),
				studentDTO.getFirstname(),
				studentDTO.getLastname(),
				studentDTO.getDob(),
				studentDTO.getAge(),
				studentDTO.getGender(),
				studentDTO.getMobile(),
				studentDTO.getAddress(),
				studentDTO.getCourseName(),
				studentDTO.getBranch(),
				studentDTO.getYear(),
				studentDTO.getEnrollmentDate(),
				studentDTO.getRollNumber(),
				studentDTO.getEmail(),
				
				this.passwordEncoder.encode(studentDTO.getPassword()));
		studentRepo.save(student);
				return student.getFirstname();
	}
	
	StudententityDTO studentDTO;
	


	@Override
	public Login loginStudent(LoginDTO loginDTO) {
		Studententity student1=studentRepo.findByEmail(loginDTO.getEmail());
		if(student1!=null)
		{
			String password=loginDTO.getPassword();
			String encodedPassword=student1.getPassword();
			Boolean isPwdRight=passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight)
			{
				Optional<Studententity>student=studentRepo.findByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(student.isPresent())
				{
					return new Login("Login Success",true);
				}
				else
				{
					return new Login("Login Failed",false);
				}
			}
			else
			{
				return new Login("Password not match",false);
			}
		}
		else
		{
			return new Login("Email Not Exist",false);
		}
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
		studentRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Student", "Id", "id"));
		studentRepo.deleteById(id);
		
	}

}*/

		