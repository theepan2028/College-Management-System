package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


import com.example.demo.entity.Studententity;

@EnableJpaRepositories//create repo classes from spring data interface
@Repository
public interface StudententityRepo extends JpaRepository<Studententity,Integer>{
	Optional<Studententity>findByEmailAndPassword(String email,String password);
	Studententity findByEmail(String email);
}
