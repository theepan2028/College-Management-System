package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Fees;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.repository.FeesRepo;
@Service
public class FeesServiceIMP implements FeesService {
	@Autowired
	private FeesRepo feesRepository;
	
	public FeesServiceIMP(FeesRepo feesRepository) {
		super();
		this.feesRepository = feesRepository;
	}

	@Override
	public Fees saveFees(Fees fees) {
		return feesRepository.save(fees) ;
		
	}

	@Override
	public List<Fees> getAllFees() {
		return feesRepository.findAll();
	}

	@Override
	public Fees getFeesById(long id) {
		return feesRepository.findById(id).orElseThrow(()->new EntityNotFoundException("fees not found with ID:"+id));
	}
	@Override
	public void deleteFees(long id) {
		// TODO Auto-generated method stub
		feesRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Fees","Id", "id"));
		feesRepository.deleteById(id);
		
	}

	@Override
	public Fees updateFees(long id, Fees fees) {
		Fees existingFees=getFeesById(id);
		existingFees.setRoll_Number(fees.getRoll_Number());
		existingFees.setStudent_Name(fees.getStudent_Name());
		existingFees.setCourse_Name(fees.getCourse_Name());
		existingFees.setYear(fees.getYear());
		
		
		existingFees.setPhone_Number(fees.getPhone_Number());
		
		existingFees.setTotal_fees_amount(fees.getTotal_fees_amount());
		
		
		//return existingFees;
		return feesRepository.save(existingFees);
	}
		}
