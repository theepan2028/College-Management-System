package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Timetable;

public interface TimetableService {
	Timetable saveTimetable(Timetable timetable);
    List<Timetable> getAllTimetable();
    Timetable getTimetableById(long id);
    Timetable updateTimetable(Long id,Timetable timetable);
    void deleteTimetable(long id);
}
