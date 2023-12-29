package com.example.demo.entity;

import java.time.DayOfWeek;
import java.time.LocalTime;

import javax.persistence.*;

@Entity
@Table(name="timetable")
public class Timetable {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String courseName;
	    private String branch;
	    private String subject;
	    private DayOfWeek dayOfWeek;
	    private LocalTime startTime;
	    private LocalTime endTime;
		public Timetable() {
			super();
		}
		public Timetable(Long id, String courseName, String branch, String subject, DayOfWeek dayOfWeek,
				LocalTime startTime, LocalTime endTime) {
			super();
			this.id = id;
			this.courseName = courseName;
			this.branch = branch;
			this.subject = subject;
			this.dayOfWeek = dayOfWeek;
			this.startTime = startTime;
			this.endTime = endTime;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		public DayOfWeek getDayOfWeek() {
			return dayOfWeek;
		}
		public void setDayOfWeek(DayOfWeek dayOfWeek) {
			this.dayOfWeek = dayOfWeek;
		}
		public LocalTime getStartTime() {
			return startTime;
		}
		public void setStartTime(LocalTime startTime) {
			this.startTime = startTime;
		}
		public LocalTime getEndTime() {
			return endTime;
		}
		public void setEndTime(LocalTime endTime) {
			this.endTime = endTime;
		}
		@Override
		public String toString() {
			return "Timetable [id=" + id + ", courseName=" + courseName + ", branch=" + branch + ", subject=" + subject
					+ ", dayOfWeek=" + dayOfWeek + ", startTime=" + startTime + ", endTime=" + endTime + "]";
		}
		
	    
}
