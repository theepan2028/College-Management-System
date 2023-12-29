package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Faculty;

public interface FacultyRepo extends JpaRepository<Faculty, Long> {

}
