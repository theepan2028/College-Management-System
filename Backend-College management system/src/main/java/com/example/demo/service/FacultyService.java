package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Faculty;


public interface FacultyService {
	Faculty saveFaculty(Faculty faculty);
    List<Faculty> getAllFaculty();
    Faculty getFacultyById(long id);
    Faculty updateFaculty(long id, Faculty Faculty);
    void deleteFaculty(long id);
}
