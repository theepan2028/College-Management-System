package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Timetable;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.TimetableRepo;

@Service
public class TimetableServiceIMP implements TimetableService {
	@Autowired
	private TimetableRepo timetableRepo;
	public TimetableServiceIMP(TimetableRepo timetableRepo) {
		super();
		this.timetableRepo=timetableRepo;
	}
	@Override
	public Timetable saveTimetable(Timetable timetable) {
		// TODO Auto-generated method stub
		return timetableRepo.save(timetable);
	}
	@Override
	public List<Timetable> getAllTimetable() {
		// TODO Auto-generated method stub
		return timetableRepo.findAll();
	}
	@Override
	public Timetable getTimetableById(long id) {
		return timetableRepo.findById(id).orElseThrow(()->new EntityNotFoundException("Timetable not found with ID:"+id));
	}
	@Override
	public Timetable updateTimetable(Long id, Timetable timetable) {
		Timetable existingTimetable=getTimetableById(id);
		existingTimetable.setCourseName(timetable.getCourseName());
		existingTimetable.setBranch(timetable.getBranch());
		existingTimetable.setSubject(timetable.getSubject());
		existingTimetable.setDayOfWeek(timetable.getDayOfWeek());
		existingTimetable.setStartTime(timetable.getStartTime());
		existingTimetable.setEndTime(timetable.getEndTime());
		
		
		return timetableRepo.save(existingTimetable);
	}
	
	@Override
	public void deleteTimetable(long id) {
		// TODO Auto-generated method stub
		timetableRepo.findById(id).orElseThrow(()-> new ResourceNotFound("Timetable","Id", "id"));
		timetableRepo.deleteById(id);
	}
	
	}
	


