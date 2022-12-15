	package com.cg.its.serviceimpl;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.its.entities.Admin;
import com.cg.its.entities.Candidate;
import com.cg.its.entities.Employee;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.entities.PanelMember;
import com.cg.its.exception.MyLoginException;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.DetailsNotFoundException;
import com.cg.its.repo.AdminRepo;
import com.cg.its.repo.CandidateRepo;
import com.cg.its.repo.EmployeeRepo;
import com.cg.its.repo.InterviewScheduleRepo;
import com.cg.its.repo.PanelMemberRepo;
import com.cg.its.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepo adminRepo;
	
	@Autowired
	private CandidateRepo candidateRepo;
	
	@Autowired
	private InterviewScheduleRepo interviewRepo;
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@Autowired
	private PanelMemberRepo panelMemberRepo;

	@Override
	public Candidate addCandidate(Candidate candidate) {
		
		return candidateRepo.save(candidate);
	}
	
	@Override
	public Candidate viewCandidateById(Integer candidateId) throws DetailsNotFoundException {
		Optional<Candidate> candidate= candidateRepo.findById(candidateId);
		if( candidate.isPresent()) {
			return candidate.get();
		}
		else {
			throw new DetailsNotFoundException("Candidate not Found");
		}
		
	}
	
	@Override
	public void deleteCandidate(Integer candidateId) throws DetailsNotFoundException{
		
		Optional<Candidate> candidate= candidateRepo.findById(candidateId);
		if( candidate.isPresent()) {
		  candidateRepo.deleteById(candidateId);
		}
		else {
			throw new DetailsNotFoundException("Candidate not Found");
		}
		
	}
	
	@Override
	public List<Candidate> viewAllCandidates() throws DetailsNotFoundException {
		List<Candidate> candidateList;
		candidateList= candidateRepo.findAll();
		if(candidateList.isEmpty()) {
			throw new DetailsNotFoundException("Candidate list is empty"); 
		}
		else {
		return candidateList;
		
		}
	}
	
	@Override
	public Candidate updateCandidate(Candidate candidate, Integer candidateId) {
		
		Optional<Candidate> candidateRef = candidateRepo.findById(candidateId);
		if(candidateRef.isPresent()) {
			candidate.setCandidateId(candidateId);
			return candidateRepo.save(candidate); 
		}
		else {
			throw new DetailsNotFoundException("Candidate not Found");
		}
	}
	
	@Override
	public InterviewSchedule scheduleInterview(InterviewSchedule interviewSchedule,Integer candidateId,Integer panelMemberId)  throws DetailsNotFoundException{
		
		Optional<PanelMember> panelMember = panelMemberRepo.findById(panelMemberId);
		Optional<Candidate> candidate= candidateRepo.findById(candidateId);
		if(panelMember.isPresent()) {
			interviewSchedule.setPanelMember(panelMember.get());
		
			if( candidate.isPresent()) {
				 interviewSchedule.setCandidate(candidate.get());
				return interviewRepo.save(interviewSchedule);
					
			}	
			else {
				throw new DetailsNotFoundException("Candidate not Found");
					
				}
		}
		else {
			throw new DetailsNotFoundException("panelMember not found");
			}
	}



	@Override
	public void deleteInterview(Integer interviewScheduleId)throws InterviewNotFoundException {
		Optional<InterviewSchedule> interview= interviewRepo.findById(interviewScheduleId);
		if(interview.isPresent()){
		  interviewRepo.deleteById(interviewScheduleId);
		}
		else {
			throw new InterviewNotFoundException("interview not Found");
		}
		
	}

	@Override
	public InterviewSchedule updateInterview(InterviewSchedule interviewSchedule, Integer interviewScheduleId,Integer panelMemberId, Integer candidateId) {
		
		Optional<InterviewSchedule> interview= interviewRepo.findById(interviewScheduleId);
		if(interview.isPresent()) {
			interviewSchedule.setInterviewSchduleId(interviewScheduleId);
			Optional<PanelMember> panelMember = panelMemberRepo.findById(panelMemberId);
			if(panelMember.isPresent()) {
				interviewSchedule.setPanelMember(panelMember.get());
				
				Optional<Candidate> candidate= candidateRepo.findById(candidateId);
				if( candidate.isPresent()) {
					 interviewSchedule.setCandidate(candidate.get());
					return interviewRepo.save(interviewSchedule);
				}
				else {
					throw new DetailsNotFoundException("Candidate not Found");
 
				}
			}
			else{
				throw new DetailsNotFoundException("panelMember not found");

			}
		}
		else {
			throw new InterviewNotFoundException("interview not Found");

		}
				
		
	}


	@Override
	public PanelMember addPanelMember(PanelMember panelMember,Integer employeeId) throws DetailsNotFoundException{
		Optional<Employee> employee= employeeRepo.findById(employeeId);
		if(employee.isPresent()) {
			
			panelMember.setEmployee(employee.get());
			return panelMemberRepo.save(panelMember);	
		}
		else {
			throw new DetailsNotFoundException("employee not Found");
		
		}
	}

	@Override
	public void deletePanelMember(Integer panelMemberId) throws DetailsNotFoundException{
		
		Optional<PanelMember> panelMember = panelMemberRepo.findById(panelMemberId);
		if(panelMember.isPresent()) {
		
			panelMemberRepo.deleteById(panelMemberId);
		}
		else {
			throw new DetailsNotFoundException("panelMember not Found");
		}
	}


	@Override
	public List<PanelMember> getAllPanelMembers() throws DetailsNotFoundException{
		
		List<PanelMember>  panelMemberList;
		panelMemberList= panelMemberRepo.findAll();
		if(panelMemberList.isEmpty()) {
			
			throw new DetailsNotFoundException("panelMemberList list is empty"); 

		}
		else {
			
			return panelMemberList;
			
		}
	}
	
	@Override
	public PanelMember updatePanelMember(PanelMember panelMember, Integer panelMemberId, Integer employeeId)throws DetailsNotFoundException {
		
		Optional<PanelMember> panelMemberRef = panelMemberRepo.findById(panelMemberId);
		if(panelMemberRef.isPresent()) {
			panelMember.setPanelMemberId(panelMemberId);
			Optional<Employee> employee= employeeRepo.findById(employeeId);
			if(employee.isPresent()) {
				
				panelMember.setEmployee(employee.get());
				return panelMemberRepo.save(panelMember);
			}
			else {
				throw new DetailsNotFoundException("Employee not Found");
			}
		}
		else {
			throw new DetailsNotFoundException("panelMember not Found");
		}
	}

	@Override
	public Employee getEmployeeById(Integer employeeId) throws DetailsNotFoundException{
		Optional<Employee> employee= employeeRepo.findById(employeeId);
		if(employee.isPresent()) {
			return employee.get();
		}
		throw new DetailsNotFoundException("employee not Found");
	}

	@Override
	public Employee addEmployee(Employee employee)  throws DetailsNotFoundException{
		
		return employeeRepo.save(employee);
	}

	@Override
	public void deleteEmployee(Integer employeeId) throws DetailsNotFoundException {
		
		Optional<Employee> employee= employeeRepo.findById(employeeId);
		if(employee.isPresent()) {
		employeeRepo.deleteById(employeeId);
		}
		else {
			throw new DetailsNotFoundException("employee not Found");
		}
		
	}
	
	@Override
	public Employee updateEmployee(Employee employee, Integer employeeId) throws DetailsNotFoundException {
		
		Optional<Employee> employeeRef= employeeRepo.findById(employeeId);
		if(employeeRef.isPresent()) {
			
			employee.setEmployeeId(employeeId);
			return employeeRepo.save(employee);
			
		}
		else {
			throw new DetailsNotFoundException("employee not Found");
		}
	}

	@Override
	public Admin createAdmin(Admin admin, Integer employeeId) {
		Optional<Employee> employee= employeeRepo.findById(employeeId);
		if(employee.isPresent()) {
			
			admin.setEmployee(employee.get());
			return adminRepo.save(admin);	
		}
		else {
			throw new DetailsNotFoundException("employee not Found");
		
		}
	}

	@Override
	public String adminLogin(Integer adminId, String password) throws MyLoginException{
		
		Optional<Admin> admin = adminRepo.findById(adminId);
			
			if(admin.isPresent() && adminRepo.getReferenceById(adminId).getPassword().equals(password)){
				
					return " Login successfull";
				}
				else {
					throw new MyLoginException("Admin or passsword does not match ");

				}
				
		}

	@Override
	public String changePassword(Admin admin,Integer adminId) {
		
		Optional<Admin> adminRef= adminRepo.findById(adminId);
		if(adminRef.isPresent())
		{
			admin.setAdminId(adminRef.get().getAdminId());
			admin.setEmployee(adminRef.get().getEmployee());
			admin.setPassword(admin.getPassword());
			adminRepo.save(admin);
			return " Password changed successfully";
		}
		else
		{
			throw new DetailsNotFoundException("Admin doesnot exist");
		}
		
	}

	@Override
	public List<Employee> getAllEmployees() throws DetailsNotFoundException {
		
		List<Employee>  EmployeeList;
		EmployeeList= employeeRepo.findAll();
		if(EmployeeList.isEmpty()) {
			
			throw new DetailsNotFoundException("panelMemberList list is empty"); 

		}
		else {
			
			return EmployeeList;
			
		}
	}

	@Override
	public List<InterviewSchedule> getAllInterviews() throws InterviewNotFoundException {
		
		List<InterviewSchedule> interviews=interviewRepo.findAll();
		if(interviews.isEmpty()) {
			throw new InterviewNotFoundException("No Interviews Scheduled");
		}
		else {
			return interviews;
		}
	}

	@Override
	public PanelMember getPanelMemberById(Integer panelMemberId) throws DetailsNotFoundException {
		
		Optional<PanelMember> panelMember = panelMemberRepo.findById(panelMemberId);
		if(panelMember.isPresent()) {
			return panelMember.get();
		}
		throw new DetailsNotFoundException("panelMember not Found");
	
	}

	@Override
	public InterviewSchedule getInterviewSchedule(Integer interviewScheduleId) throws DetailsNotFoundException {
		
		Optional<InterviewSchedule> interview = interviewRepo.findById(interviewScheduleId);
		if(interview.isPresent()) {
			return interview.get();
		}
		throw new DetailsNotFoundException("interview not Found");
	}

	@Override
	public Admin getAdminById(Integer adminId) throws DetailsNotFoundException {
		
		Optional<Admin> user = adminRepo.findById(adminId);
		if(user.isPresent()) {
			return user.get();
		}
		throw new DetailsNotFoundException("Admin not Found");
	
	}

	

	

	

	


}
