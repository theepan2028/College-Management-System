package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Fees;

public interface FeesRepo extends JpaRepository<Fees,Long>  {

}
