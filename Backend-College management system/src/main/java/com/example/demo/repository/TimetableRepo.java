package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Timetable;

public interface TimetableRepo extends JpaRepository<Timetable, Long> {

}
