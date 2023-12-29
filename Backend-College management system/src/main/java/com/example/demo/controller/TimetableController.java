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

import com.example.demo.entity.Timetable;
import com.example.demo.service.TimetableService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/timetables")
public class TimetableController {
	@Autowired
    public TimetableService timetableService;
	 public TimetableController(TimetableService timetableService) 
	 {
		 super();
	      this.timetableService = timetableService;
	    }
	 @PostMapping
	    public ResponseEntity<Timetable> saveTimetable(@RequestBody Timetable timetable) {
	        return new ResponseEntity<Timetable>(timetableService.saveTimetable(timetable), HttpStatus.CREATED);
	    }

	    @GetMapping
	    public List<Timetable> getTimetables() {
	        return timetableService.getAllTimetable();
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<Timetable> getTimetableById(@PathVariable("id") long timetableId) {
	        return new ResponseEntity<Timetable>(timetableService.getTimetableById(timetableId), HttpStatus.OK);
	    }

	    @PutMapping("{id}")
	    public ResponseEntity<Timetable> updateTimetable(@PathVariable("id") long id, @RequestBody Timetable timetable) {
	        return new ResponseEntity<Timetable>(timetableService.updateTimetable(id, timetable), HttpStatus.OK);
	    }

	    @DeleteMapping("{id}")
	    public ResponseEntity<String> deleteTimetable(@PathVariable("id") long id) {
	        timetableService.deleteTimetable(id);
	        return new ResponseEntity<String>("Timetable Deleted...", HttpStatus.OK);
	    }

}
