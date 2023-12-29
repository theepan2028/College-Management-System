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

import com.example.demo.entity.Faculty;
import com.example.demo.service.FacultyService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/facultys")
public class FacultyController {
	
	
@Autowired
    private FacultyService facultyService;
   
public FacultyController(FacultyService facultyService)
{
	super();
	this.facultyService=facultyService;
}
@PostMapping
public ResponseEntity<Faculty> saveFaculty(@RequestBody Faculty faculty) {
    return new ResponseEntity<Faculty>(facultyService.saveFaculty(faculty), HttpStatus.CREATED);
}
@GetMapping
public List<Faculty> getAllFaculty() {
    return facultyService.getAllFaculty();
}

@GetMapping("{id}")
public ResponseEntity<Faculty> getFacultyById(@PathVariable ("id")long facultyId){
    return new ResponseEntity<Faculty>(facultyService.getFacultyById(facultyId),HttpStatus.OK);
}
@PutMapping("{id}")
public ResponseEntity<Faculty>updateFaculty(@PathVariable("id") long id, @RequestBody Faculty faculty) {
    return new ResponseEntity<Faculty>(facultyService.updateFaculty(id, faculty), HttpStatus.OK);
}


@DeleteMapping("{id}")
public ResponseEntity<String> deleteFaculty(@PathVariable("id") long id) {
    facultyService.deleteFaculty(id);
    return new ResponseEntity<String>("Faculty Deleted...", HttpStatus.OK);
}
}

   /* @GetMapping
    public List<Faculty> getAllFaculty() {
        return facultyService.getAllFaculty();
    }

    @GetMapping("/{id}")
    public Faculty getFacultyById(@PathVariable Long id) {
        return facultyService.getFacultyById(id);
    }

    @PostMapping
    public void saveFaculty(@RequestBody Faculty faculty) {
        facultyService.saveFaculty(faculty);
    }

    @DeleteMapping("/{id}")
    public void deleteFaculty(@PathVariable Long id) {
        facultyService.deleteFaculty(id);
    }
}
/*@PostMapping
public ResponseEntity<Faculty>saveFaculty(@RequestBody Faculty faculty)
{
	return new ResponseEntity<Faculty>(FacultyService.saveFaculty(faculty),HttpStatus.CREATED);
}
//build getAll learner  RESTAPI
@GetMapping
public List<Student>getStudents()
{
	return studentService.getAllStudents();
}
//build get single learner RESTAPI
@GetMapping("{id}")
public ResponseEntity<Student>getStudentById(@PathVariable("id")long studentId)
{
	return new ResponseEntity<Student>(studentService.getStudentById(studentId),HttpStatus.OK);
}
@PutMapping("{id}")
public ResponseEntity<Student>updateStudent(@PathVariable("id")long id,@RequestBody Student student)

{
	return new ResponseEntity<Student>(studentService.updateStudent(id, student),HttpStatus.OK); 
}
@DeleteMapping("{id}")
public ResponseEntity<String>deleteStudent(@PathVariable("id")long id)
{
	studentService.deleteStudent(id);
	return new ResponseEntity<String>("Student Deleted...",HttpStatus.OK);
}
	

}
*/
