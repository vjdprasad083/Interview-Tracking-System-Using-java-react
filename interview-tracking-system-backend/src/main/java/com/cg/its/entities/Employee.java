package com.cg.its.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "EMPLOYEE")
@JsonIgnoreProperties(value = {"employeeId","panelmember"},allowGetters = true)
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EMPLOYEE_ID")
	private Integer employeeId;
	
	@NotBlank(message = "employeeName must not to be null and empty")
	@Column(name = "EMPLOYEE_NAME")
	private String employeeName;
	
	@Column(name="ROLE")
	private String role;
	
	
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY,mappedBy = "employee",cascade = CascadeType.REMOVE)
	private PanelMember panelMember;
	
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY,mappedBy = "employee",cascade = CascadeType.ALL)
	private Admin Admin;

}
