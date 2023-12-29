package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="course")
public class Course {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id;
        private String courseName;
        private String branch;
        private String year;
        private String courseDuration;
        private String language;
        private String subjectName;
	    private String courseCode;
	    private String courseType;
		public Course() {
			super();
		}
		public Course(Long id, String courseName, String branch, String year, String courseDuration, String language,
				String subjectName, String courseCode, String courseType) {
			super();
			Id = id;
			this.courseName = courseName;
			this.branch = branch;
			this.year = year;
			this.courseDuration = courseDuration;
			this.language = language;
			this.subjectName = subjectName;
			this.courseCode = courseCode;
			this.courseType = courseType;
		}
		public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
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
		public String getCourseDuration() {
			return courseDuration;
		}
		public void setCourseDuration(String courseDuration) {
			this.courseDuration = courseDuration;
		}
		public String getLanguage() {
			return language;
		}
		public void setLanguage(String language) {
			this.language = language;
		}
		public String getSubjectName() {
			return subjectName;
		}
		public void setSubjectName(String subjectName) {
			this.subjectName = subjectName;
		}
		public String getCourseCode() {
			return courseCode;
		}
		public void setCourseCode(String courseCode) {
			this.courseCode = courseCode;
		}
		public String getCourseType() {
			return courseType;
		}
		public void setCourseType(String courseType) {
			this.courseType = courseType;
		}
		@Override
		public String toString() {
			return "Course [Id=" + Id + ", courseName=" + courseName + ", branch=" + branch + ", year=" + year
					+ ", courseDuration=" + courseDuration + ", language=" + language + ", subjectName=" + subjectName
					+ ", courseCode=" + courseCode + ", courseType=" + courseType + "]";
		}
		

}
