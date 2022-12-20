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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PANEL_MEMBER")
@JsonIgnoreProperties(value = {"panelMemberId","employee","interviewSchedule"},allowGetters = true)
public class PanelMember {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PANEL_MEMBER_ID")
	private Integer panelMemberId;
	
	@NotBlank(message = "password should not be null and empty")
	private String password;
	
	
	@NotBlank(message = "panelMemberType must not to be null")
	@Column(name = "TYPE")
	private String panelMemberType;
	
	@NotBlank(message = "location must not to be null")
	@Column(name = "LOCATION")
	private String location;
	

	@OneToOne(cascade = CascadeType.PERSIST) 
	private Employee employee;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY,mappedBy  = "panelMember", cascade = CascadeType.REMOVE)
	private List<InterviewSchedule> interviewSchedule;
	
	
	
		

}
