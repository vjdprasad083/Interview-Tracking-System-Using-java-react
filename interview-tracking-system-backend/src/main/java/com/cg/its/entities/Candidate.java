package com.cg.its.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CANDIDATE")
@JsonIgnoreProperties(value = {"candidateId","interviewSchedule"},allowGetters = true)
public class Candidate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CANDIDATE_ID")
	private Integer candidateId;
	
	@NotBlank(message = "not black and null")
	@Column(name = "CANDIDATE_NAME")
	private String candidateName;
	
	@NotBlank(message = "not black and null")
	@Column(name = "PRIMARY_SKILLS")
	private String primarySkills;
	
	@NotBlank(message = "not black and null")
	@Column(name = "SECONDARY_SKILLS")
	private String secondarySkills;
	
	@NotNull(message = "not null")
	@Column(name = "EXPERIENCE")
	private Integer experience;
	
	@NotBlank(message = "not black and null")
	@Column(name = "QUALIFICATION")
	private String qualification;
	
	@NotBlank(message = "not black and null")
	@Column(name = "DESIGNATION")
	private String designation;
	
	@NotNull(message = "not null")
	@Column(name = "NOTICE_PERIOD")
	private Integer noticePeriod;
	
	@NotBlank(message = "not black and null")
	@Column(name = "LOCATION")
	private String location;
	
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY,mappedBy  = "candidate", cascade = CascadeType.ALL)
	private List<InterviewSchedule> interviewSchedules;
	
	
	
	

}
