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

import com.example.demo.entity.Attendance;
import com.example.demo.service.AttendanceService;
@RestController
@CrossOrigin("*")
@RequestMapping("api/attendances")
public class AttendanceController {
	@Autowired
    private AttendanceService attendanceService;
	
	
	public AttendanceController(AttendanceService attendanceService)
	{
		super();
		this.attendanceService=attendanceService;
	}
	 @PostMapping
	    public ResponseEntity<Attendance> saveAttendance(@RequestBody Attendance attendance)
	    {
	       
	        return new ResponseEntity<Attendance>(attendanceService.saveAttendance(attendance), HttpStatus.CREATED);
	    }

	    @GetMapping
	    public List<Attendance> getAllAttendances() {
	        return attendanceService.getAllAttendances();
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<Attendance> getAttendanceById(@PathVariable("id")long attendanceId)
	    {
	    	return new ResponseEntity<Attendance>(attendanceService.getAttendanceById(attendanceId),HttpStatus.OK);
	    }
	    
	    @PutMapping("{id}")
		public ResponseEntity<Attendance>updateAttendance(@PathVariable("id")long id,@RequestBody Attendance attendance)

		{
			return new ResponseEntity<Attendance>(attendanceService.updateAttendance(id, attendance),HttpStatus.OK); 
		}

	    @DeleteMapping("{id}")
	    public ResponseEntity<String> deleteAttendance(@PathVariable Long id) {
	    	attendanceService.deleteAttendance(id);
			return new ResponseEntity<String>("Attendance Deleted...",HttpStatus.OK);
		}
}
