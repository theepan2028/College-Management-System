package com.example.demo.dto;

public class StudententityDTO {
	private int id;
	private String firstname;
	private String lastname;
	private String dob;
	private String age;
	private String gender;
	private String mobile;
	private String address;
	private String courseName;
	private String branch;
	private String year;
	private String enrollmentDate;
	private String rollNumber;
	private String email;
	private String password;
	public StudententityDTO() {
		super();
	}
	public StudententityDTO(int id, String firstname, String lastname, String dob, String age, String gender,
			String mobile, String address, String courseName, String branch, String year, String enrollmentDate,
			String rollNumber, String email, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = dob;
		this.age = age;
		this.gender = gender;
		this.mobile = mobile;
		this.address = address;
		this.courseName = courseName;
		this.branch = branch;
		this.year = year;
		this.enrollmentDate = enrollmentDate;
		this.rollNumber = rollNumber;
		this.email = email;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getEnrollmentDate() {
		return enrollmentDate;
	}
	public void setEnrollmentDate(String enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "StudententityDTO [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", dob=" + dob
				+ ", age=" + age + ", gender=" + gender + ", mobile=" + mobile + ", address=" + address
				+ ", courseName=" + courseName + ", branch=" + branch + ", year=" + year + ", enrollmentDate="
				+ enrollmentDate + ", rollNumber=" + rollNumber + ", email=" + email + ", password=" + password + "]";
	}
	
	
}
