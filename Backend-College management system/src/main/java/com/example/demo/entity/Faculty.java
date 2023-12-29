package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="faculty")
public class Faculty {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 private String staffName;
	 private String gender;
	 private String mobileNo;
	 private String education;
	 private String designation;
	 private String address;
	 private String email;
	
	public Faculty() {
		super();
	}
	public Faculty(Long id, String staffName, String gender, String mobileNo, String education, String designation,
			String address, String email) {
		super();
		this.id = id;
		this.staffName = staffName;
		this.gender = gender;
		this.mobileNo = mobileNo;
		this.education = education;
		this.designation = designation;
		this.address = address;
		this.email = email;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStaffName() {
		return staffName;
	}
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Faculty [id=" + id + ", staffName=" + staffName + ", gender=" + gender + ", mobileNo=" + mobileNo
				+ ", education=" + education + ", designation=" + designation + ", address=" + address + ", email="
				+ email + "]";
	}
	
	 
	    
		
}
