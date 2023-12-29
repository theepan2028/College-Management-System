package com.example.demo.entity;

import java.util.Date;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name="attendance")
public class Attendance {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    //private String attendance_date;
	    private String student_name;
	    private String course_name;
	    private String year;
	    private String branch;
	    private String rollNumber;
	    private Date attendance_date=new Date(System.currentTimeMillis());
	    private String todayAttendance;
		public Attendance() {
			super();
		}
		public Attendance(Long id, String student_name, String course_name, String year, String branch,
				String rollNumber, Date attendance_date, String todayAttendance) {
			super();
			this.id = id;
			this.student_name = student_name;
			this.course_name = course_name;
			this.year = year;
			this.branch = branch;
			this.rollNumber = rollNumber;
			this.attendance_date = attendance_date;
			this.todayAttendance = todayAttendance;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getStudent_name() {
			return student_name;
		}
		public void setStudent_name(String student_name) {
			this.student_name = student_name;
		}
		public String getCourse_name() {
			return course_name;
		}
		public void setCourse_name(String course_name) {
			this.course_name = course_name;
		}
		public String getYear() {
			return year;
		}
		public void setYear(String year) {
			this.year = year;
		}
		public String getBranch() {
			return branch;
		}
		public void setBranch(String branch) {
			this.branch = branch;
		}
		public String getRollNumber() {
			return rollNumber;
		}
		public void setRollNumber(String rollNumber) {
			this.rollNumber = rollNumber;
		}
		public Date getAttendance_date() {
			return attendance_date;
		}
		public void setAttendance_date(Date attendance_date) {
			this.attendance_date = attendance_date;
		}
		public String getTodayAttendance() {
			return todayAttendance;
		}
		public void setTodayAttendance(String todayAttendance) {
			this.todayAttendance = todayAttendance;
		}
		@Override
		public String toString() {
			return "Attendance [id=" + id + ", student_name=" + student_name + ", course_name=" + course_name
					+ ", year=" + year + ", branch=" + branch + ", rollNumber=" + rollNumber + ", attendance_date="
					+ attendance_date + ", todayAttendance=" + todayAttendance + "]";
		}
		
}
