package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Attendance;

public interface AttendanceService {
	Attendance saveAttendance(Attendance attendance);
    List<Attendance> getAllAttendances();
    Attendance getAttendanceById(long id);
    Attendance updateAttendance(long id,Attendance attendance);
    void deleteAttendance(long id);
}
