package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.FacultyRepo;

@Service
public class FacultyServiceIMP implements FacultyService {
	 @Autowired
	 private FacultyRepo facultyRepository;

	@Override
	public Faculty saveFaculty(Faculty faculty) {
		return facultyRepository.save(faculty);
		
	}

	@Override
	public List<Faculty> getAllFaculty() {
		return facultyRepository.findAll();
	}

	@Override
	public Faculty getFacultyById(long id) {
		 return facultyRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Faculty not found with ID:"+id));
	}

	@Override
	public void deleteFaculty(long id) {
		facultyRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Faculty","Id", "id"));
		facultyRepository.deleteById(id);
		
	}

	@Override
	public Faculty updateFaculty(long id, Faculty Faculty) {
		Faculty existingFaculty =getFacultyById(id);
		existingFaculty.setStaffName(Faculty.getStaffName());
		existingFaculty.setGender(Faculty.getGender());
		existingFaculty.setMobileNo(Faculty.getMobileNo());
		existingFaculty.setEducation(Faculty.getEducation());
		existingFaculty.setDesignation(Faculty.getDesignation());
		existingFaculty.setAddress(Faculty.getAddress());
		existingFaculty.setEmail(Faculty.getEmail());
		return facultyRepository.save(existingFaculty);
	}

	
}
