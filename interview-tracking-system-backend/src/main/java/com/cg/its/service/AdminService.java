package com.cg.its.service;

import java.util.List;

import com.cg.its.entities.Admin;
import com.cg.its.entities.Candidate;
import com.cg.its.entities.Employee;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.entities.PanelMember;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.MyLoginException;
import com.cg.its.exception.DetailsNotFoundException;

public interface AdminService {
	
	Admin createAdmin(Admin admin, Integer employeeId);
	
	String adminLogin(Integer adminId,String password)throws MyLoginException;
	
	String changePassword(Admin admin,Integer adminId);
	
	Admin getAdminById(Integer adminId) throws DetailsNotFoundException;
	
	Candidate addCandidate(Candidate candidate);
	
	Candidate viewCandidateById(Integer candidateId) throws DetailsNotFoundException;
	
	void deleteCandidate(Integer candidateId)throws DetailsNotFoundException;
	
	Candidate updateCandidate(Candidate candidate,Integer candidateId);
	
	List<Candidate> viewAllCandidates()throws DetailsNotFoundException;
	
	InterviewSchedule scheduleInterview(InterviewSchedule interviewSchedule,Integer studentId,Integer panelMemberId)throws DetailsNotFoundException;
	
	void deleteInterview(Integer interviewScheduleId)throws InterviewNotFoundException;
	
	InterviewSchedule updateInterview(InterviewSchedule interviewSchedule,Integer studentId,Integer panelMemberId,Integer  interviewScheduledId);
	
	List<InterviewSchedule> getAllInterviews ()throws InterviewNotFoundException;
	
	InterviewSchedule getInterviewSchedule(Integer interviewScheduleId) throws DetailsNotFoundException;

	
	PanelMember addPanelMember(PanelMember panelMember,Integer employeeId)throws DetailsNotFoundException;
	
	void deletePanelMember(Integer panelMemberId)throws DetailsNotFoundException;
	
	List<PanelMember> getAllPanelMembers()throws DetailsNotFoundException;
	
	PanelMember updatePanelMember(PanelMember panelMember,Integer panelMemberId,Integer employeeId)throws DetailsNotFoundException;
	
	PanelMember getPanelMemberById(Integer panelMemberId) throws DetailsNotFoundException;


	
	Employee getEmployeeById(Integer employeeId) throws DetailsNotFoundException;
	
	Employee updateEmployee(Employee employee,Integer employeeId)throws DetailsNotFoundException;
	
	List<Employee> getAllEmployees()throws DetailsNotFoundException;
	
	Employee addEmployee(Employee employee);
	
	void deleteEmployee(Integer employeeId) throws DetailsNotFoundException;
	

	
	
	
}
