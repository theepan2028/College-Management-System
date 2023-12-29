package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Fees;

public interface FeesService {
	Fees saveFees(Fees fees);
    List<Fees> getAllFees();
    Fees getFeesById(long id);
    Fees updateFees(long id,Fees fees);
    void deleteFees(long id);
}
