package com.example.demo.entity;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="fees")
public class Fees {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id; 
	 private String roll_Number;
	 private String student_Name;
	 private String course_Name;
	 private String year;
	 
	 private String phone_Number;
	 private Date paidDate=new Date(System.currentTimeMillis());
	 private String total_fees_amount;
	
	public Fees() {
		super();
	}
	public Fees(Long id, String roll_Number, String student_Name, String course_Name, String year, String branch,
			String phone_Number, Date paidDate, String total_fees_amount) {
		super();
		this.id = id;
		this.roll_Number = roll_Number;
		this.student_Name = student_Name;
		this.course_Name = course_Name;
		this.year = year;
		
		this.phone_Number = phone_Number;
		this.paidDate = paidDate;
		this.total_fees_amount = total_fees_amount;
		
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRoll_Number() {
		return roll_Number;
	}
	public void setRoll_Number(String roll_Number) {
		this.roll_Number = roll_Number;
	}
	public String getStudent_Name() {
		return student_Name;
	}
	public void setStudent_Name(String student_Name) {
		this.student_Name = student_Name;
	}
	public String getCourse_Name() {
		return course_Name;
	}
	public void setCourse_Name(String course_Name) {
		this.course_Name = course_Name;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	
	public String getPhone_Number() {
		return phone_Number;
	}
	public void setPhone_Number(String phone_Number) {
		this.phone_Number = phone_Number;
	}
	public Date getPaidDate() {
		return paidDate;
	}
	public void setPaidDate(Date paidDate) {
		this.paidDate = paidDate;
	}
	public String getTotal_fees_amount() {
		return total_fees_amount;
	}
	public void setTotal_fees_amount(String total_fees_amount) {
		this.total_fees_amount = total_fees_amount;
	}
	
	
	@Override
	public String toString() {
		return "Fees [id=" + id + ", roll_Number=" + roll_Number + ", student_Name=" + student_Name + ", course_Name="
				+ course_Name + ", year=" + year + ", phone_Number=" + phone_Number
				+ ", paidDate=" + paidDate + ", total_fees_amount=" + total_fees_amount + "]";
	}
	
	    
}