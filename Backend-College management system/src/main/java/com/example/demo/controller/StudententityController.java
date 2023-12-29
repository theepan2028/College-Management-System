package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.StudententityDTO;

import com.example.demo.response.Login;
import com.example.demo.service.StudententityService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/studentdetails")

public class StudententityController {
	@Autowired
	public StudententityService studentService;
	@PostMapping(path="/register")
	public String saveStudent(@RequestBody StudententityDTO studentDTO)
	{
		String id=studentService.addStudent(studentDTO);
		return id;
	}
	@PostMapping(path="/login")
	public ResponseEntity<?>loginStudent(@RequestBody LoginDTO loginDTO)
	{
		Login login=studentService.loginStudent(loginDTO);
		return ResponseEntity.ok(login);
	}
	

}
