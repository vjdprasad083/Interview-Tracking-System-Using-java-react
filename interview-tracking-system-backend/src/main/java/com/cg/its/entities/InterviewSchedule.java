package com.cg.its.entities;



import java.time.LocalDate;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "INTERVIEW_SCHEDULE")
@JsonIgnoreProperties(value = {"interviewSchduleId","candidate","panelMember","techRating","hrRating"}, allowGetters = true)
public class InterviewSchedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "INTERVIEW_SCHEDULE_ID")
	private Integer interviewSchduleId;
	
	@Column(name = "TECH_RATING")
	private Integer techRating;
	
	@Column(name = "HR_RATING")
	private Integer hrRating;
	
	@Column(name = "INTERVIEW_DATE")
	private LocalDate interviewDate;
	
	@NotBlank(message = "finalStatus must not to be null and empty")
	@Column(name = "FINAL_STATUS")
	private String finalStatus;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	private Candidate candidate;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	private PanelMember panelMember;
	

}
