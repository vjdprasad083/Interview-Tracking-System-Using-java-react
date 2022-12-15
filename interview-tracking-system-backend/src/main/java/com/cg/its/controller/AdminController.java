package com.cg.its.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.its.entities.Admin;
import com.cg.its.entities.Candidate;
import com.cg.its.entities.Employee;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.entities.PanelMember;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.DetailsNotFoundException;
import com.cg.its.service.AdminService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@Validated
	@PostMapping("/admins/{employee}")
	public ResponseEntity<Admin> saveAdmin(@RequestBody @Valid Admin admin,@PathVariable Integer employee){
		Admin adminRef= service.createAdmin(admin,employee);
		return new ResponseEntity<Admin>(adminRef,HttpStatus.CREATED);	
		}
	
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestParam Integer id,@RequestParam String password){
		String string= service.adminLogin(id, password);
		return new ResponseEntity<String>(string,HttpStatus.OK);
	}
	
	@Validated
	@PutMapping("/admins/{admin}")
	public ResponseEntity<String> changePassword(@RequestBody @Valid Admin admins,@PathVariable Integer admin){
		String string=service.changePassword(admins,admin);
		return new ResponseEntity<String>(string,HttpStatus.CREATED);	
		}
	
	@GetMapping("/admins/{admin}")
	public ResponseEntity<Admin> getAdmin(@PathVariable Integer admin)throws DetailsNotFoundException {
		Admin user=service.getAdminById(admin);
		return new ResponseEntity<Admin>(user,HttpStatus.OK);
	}
	
	
	@Validated
	@PostMapping("/candidates")
	public ResponseEntity<Candidate> saveCandidate(@RequestBody @Valid Candidate candidate) {
		Candidate candidateRef =service.addCandidate(candidate);
		return  new ResponseEntity<Candidate>(candidateRef,HttpStatus.CREATED);
	}
	
	@GetMapping("/candidates/{candidate}")
	public ResponseEntity<Candidate> getCandiadate(@PathVariable Integer candidate)throws DetailsNotFoundException {
		
	 Candidate candidateRef=service.viewCandidateById(candidate);
	 return new ResponseEntity<>(candidateRef,HttpStatus.OK);
	 
	}
	
	@DeleteMapping("/candidates/{candidate}")
	public ResponseEntity<Candidate> deleteCandidate(@PathVariable Integer candidate) throws DetailsNotFoundException {
		service.deleteCandidate(candidate);
		return new ResponseEntity<Candidate>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getAllCandidate() throws DetailsNotFoundException{
		
		List<Candidate> candidateList= service.viewAllCandidates();
		return new ResponseEntity<List<Candidate>>(candidateList,HttpStatus.OK);
	}
	
	@PutMapping("/candidates/{candidate}")
	public ResponseEntity<Candidate> updateCandidate(@RequestBody @Valid Candidate candidateDetails,@PathVariable Integer candidate ){
		
		Candidate candidateRef =service.updateCandidate(candidateDetails,candidate);
		return  new ResponseEntity<Candidate>(candidateRef,HttpStatus.OK);
	}

	
	@Validated
	@PostMapping("/interviews/{candidate}/{panelmember}")
	public ResponseEntity<InterviewSchedule> scheduleInterview(@RequestBody @Valid InterviewSchedule interview,@PathVariable Integer candidate,@PathVariable Integer panelmember)throws DetailsNotFoundException {
		
		InterviewSchedule interviewSchedule= service.scheduleInterview(interview,candidate,panelmember);
		return new ResponseEntity<InterviewSchedule>(interviewSchedule,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/interviews/{interview}")
	public ResponseEntity<InterviewSchedule> deleteInterview(@PathVariable Integer interview) throws InterviewNotFoundException {
		service.deleteInterview(interview);
		return new ResponseEntity<InterviewSchedule>(HttpStatus.NO_CONTENT);
	}
	
	@Validated
	@PutMapping("/interviews/{interview}/{panelmember}/{candidate}")
	public ResponseEntity<InterviewSchedule >updateinterview(@RequestBody @Valid InterviewSchedule interviewschedule, @PathVariable Integer interview,@PathVariable Integer panelmember,@PathVariable Integer candidate) {
		InterviewSchedule interviewSchedule=service.updateInterview(interviewschedule,interview,panelmember,candidate);
		return new ResponseEntity<InterviewSchedule>(interviewSchedule,HttpStatus.OK);
	}
	
	@GetMapping("/interviews")
	public ResponseEntity<List<InterviewSchedule>> getHrInterviews() throws InterviewNotFoundException{
		List<InterviewSchedule> interviews=service.getAllInterviews();
		return  new ResponseEntity<List<InterviewSchedule>>(interviews,HttpStatus.OK);
	}
	
	@GetMapping("/interviews/{interview}")
	public ResponseEntity<InterviewSchedule> getInterview(@PathVariable Integer interview)throws DetailsNotFoundException {
		InterviewSchedule interviewScheduleRef=service.getInterviewSchedule(interview);
		return new ResponseEntity<InterviewSchedule>(interviewScheduleRef,HttpStatus.OK);
	}
	
	
	@Validated
	@PostMapping("/panelMembers/{employee}")
	public ResponseEntity<PanelMember> addPanelMember(@RequestBody @Valid PanelMember panelMember,@PathVariable Integer employee) {
		PanelMember panelMemberRef = service.addPanelMember(panelMember, employee);
		return new ResponseEntity<PanelMember>(panelMemberRef,HttpStatus.OK);
	}
	

	@DeleteMapping("/panelMembers/{panelmember}")
	public ResponseEntity<PanelMember> deletePanelMember(@PathVariable Integer panelmember)  throws DetailsNotFoundException{
		service.deletePanelMember(panelmember);
		return new ResponseEntity<PanelMember>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/panelMembers/{panelmember}/{employee}")
	public ResponseEntity<PanelMember> updatePanelMember(@RequestBody @Valid PanelMember panelMemberDetails, @PathVariable Integer panelmember,@PathVariable Integer employee)  throws DetailsNotFoundException{
		PanelMember panelMemberRef = service.updatePanelMember(panelMemberDetails,panelmember,employee);
		return new ResponseEntity<PanelMember>(panelMemberRef,HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/panelMembers")
	public ResponseEntity<List<PanelMember>>getAllPanelMembers() throws DetailsNotFoundException{
		List<PanelMember> panelMemberList=service.getAllPanelMembers();
		return new ResponseEntity<List<PanelMember>>(panelMemberList,HttpStatus.OK);
	}
	
	@GetMapping("/panelMembers/{panelmember}")
	public ResponseEntity<PanelMember> getPanelMember(@PathVariable Integer panelmember)throws DetailsNotFoundException {
		PanelMember panelMemberRef=service.getPanelMemberById(panelmember);
		return new ResponseEntity<PanelMember>(panelMemberRef,HttpStatus.OK);
	}
	
	@GetMapping("/employees/{employee}")
	public ResponseEntity<Employee> getEmployeee(@PathVariable Integer employee)throws DetailsNotFoundException {
		Employee employeeRef=service.getEmployeeById(employee);
		return new ResponseEntity<Employee>(employeeRef,HttpStatus.OK);
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>>getAllEmployees() throws DetailsNotFoundException{
		List<Employee> EmployeeList=service.getAllEmployees();
		return new ResponseEntity<List<Employee>>(EmployeeList,HttpStatus.OK);
	}
	
	
	
	@Validated
	@PostMapping("/employees")
	public ResponseEntity<Employee> saveEmployee(@RequestBody @Valid Employee employee) {
		Employee employeeRef = service.addEmployee(employee);
		return new ResponseEntity<Employee>(employeeRef,HttpStatus.OK);
	}
	
	@DeleteMapping("/employees/{employee}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Integer employee) throws DetailsNotFoundException {
		service.deleteEmployee(employee);
		return new ResponseEntity<Employee>(HttpStatus.NO_CONTENT);
	}
	@PutMapping("/employees/{employee}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody @Valid Employee employeeDetails,@PathVariable Integer employee ){
		
		Employee employeeRef =service.updateEmployee(employeeDetails,employee);
		return  new ResponseEntity<Employee>(employeeRef,HttpStatus.OK);
	}
	
	
	
	
	

	
	
	
	

}
