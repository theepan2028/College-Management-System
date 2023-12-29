package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Fees;

import com.example.demo.service.FeesService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/feess")
public class FeesController {
	@Autowired
	public FeesService feesService;
	public FeesController(FeesService feesService)
	{
		super();
		this.feesService=feesService;
	}
	@PostMapping
    public ResponseEntity<Fees> saveFees(@RequestBody Fees fees) {
        return new ResponseEntity<Fees>(feesService.saveFees(fees), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Fees> getFees() {
        return feesService.getAllFees();
    }

    @GetMapping("{id}")
    public ResponseEntity<Fees> getFeesById(@PathVariable("id") long feesId) {
        return new ResponseEntity<Fees>(feesService.getFeesById(feesId), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Fees> updateFees(@PathVariable("id") long id, @RequestBody Fees fees) {
        return new ResponseEntity<Fees>(feesService.updateFees(id, fees), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFees(@PathVariable("id") long id) {
        feesService.deleteFees(id);
        return new ResponseEntity<String>("Fees Deleted...", HttpStatus.OK);
    }
}
	/*@GetMapping
    public List<Fees> getAllFees() {
        return feesService.getAllFees();
    }

    @GetMapping("/{id}")
    public Fees getFeeById(@PathVariable Long id) {
        return feesService.getFeesById(id);
    }

    @PostMapping
    public void saveFees(@RequestBody Fees fees) {
        feesService.saveFees(fees);
    }

    @DeleteMapping("/{id}")
    public void deleteFee(@PathVariable Long id) {
        feesService.deleteFees(id);
    }*/

		

