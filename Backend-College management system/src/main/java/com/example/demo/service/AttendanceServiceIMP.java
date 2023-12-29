package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Attendance;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.AttendanceRepo;
@Service
public class AttendanceServiceIMP implements AttendanceService {
	@Autowired
    private AttendanceRepo attendanceRepo;
	
	public AttendanceServiceIMP(AttendanceRepo attendanceRepo)
	{
		super();
		this.attendanceRepo=attendanceRepo;
	}

	@Override
	public Attendance saveAttendance(Attendance attendance) {
		
		return attendanceRepo.save(attendance);
	}

	@Override
	public List<Attendance> getAllAttendances() {
		return attendanceRepo.findAll();
	}

	@Override
	public Attendance getAttendanceById(long id) {
		return attendanceRepo.findById(id).orElseThrow(()->new EntityNotFoundException("Attendance not found with ID:"+id));
	}
		
		

	@Override
	public Attendance updateAttendance(long id, Attendance attendance) {
		Attendance existingAttendance=getAttendanceById(id);
		
		existingAttendance.setStudent_name(attendance.getStudent_name());
		existingAttendance.setCourse_name(attendance.getCourse_name());
		existingAttendance.setYear(attendance.getYear());
		existingAttendance.setBranch(attendance.getBranch());
		
		existingAttendance.setRollNumber(attendance.getRollNumber());
		existingAttendance.setTodayAttendance(attendance.getTodayAttendance());
		
		
		return attendanceRepo.save(existingAttendance);
	}
		

	@Override
	public void deleteAttendance(long id) {
		attendanceRepo.findById(id).orElseThrow(()-> new ResourceNotFound("Attendance","Id", "id"));
		attendanceRepo.deleteById(id);
		
		
	}
}
	/*@Override
	public void saveAttendance(Attendance attendance) {
		 attendanceRepo.save(attendance);
		
	}

	@Override
	public List<Attendance> getAllAttendances() {
		 return attendanceRepo.findAll();
	}

	@Override
	public Attendance getAttendanceById(Long id) {
		return attendanceRepo.findById(id).orElse(null);
	}

	@Override
	public void deleteAttendance(Long id) {
		 attendanceRepo.deleteById(id);
		
	}

}*/
