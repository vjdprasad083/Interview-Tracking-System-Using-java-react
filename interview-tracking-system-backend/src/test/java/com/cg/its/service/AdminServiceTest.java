package com.cg.its.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import com.cg.its.entities.Candidate;
import com.cg.its.entities.Employee;
import com.cg.its.entities.PanelMember;
import com.cg.its.repo.AdminRepo;
import com.cg.its.repo.CandidateRepo;
import com.cg.its.repo.EmployeeRepo;
import com.cg.its.repo.PanelMemberRepo;
import com.cg.its.serviceimpl.AdminServiceImpl;


@ExtendWith(MockitoExtension.class)
public class AdminServiceTest {
	
	@Mock
	PanelMemberRepo panelMemberRepo;
	
	@Mock
	AdminRepo adminRepo;
	
	@Mock
	CandidateRepo candidateRepo;
	
	@Mock
	EmployeeRepo employeeRepo;
	
	@InjectMocks
	AdminServiceImpl adminService;
	
	
	@Test
	void testCreateEmployee() {
		Employee employee= new Employee();
		employee.setEmployeeId(1);
		employee.setEmployeeName("venky");
		when(employeeRepo.save(employee)).thenReturn(employee);
		assertEquals( employee,adminService.addEmployee(employee));
		
	}


	@Test
	void testGetAllPanelMembers() {
		
		List<PanelMember> panelMemberMockData = createPanelMemberMockData();
		
		when(panelMemberRepo.findAll()).thenReturn(panelMemberMockData);
		
		List<PanelMember> panelmember = adminService.getAllPanelMembers();
		
		assert(panelmember.size() == panelMemberMockData.size());
		assert(panelmember.get(0).getPanelMemberType().equals(panelMemberMockData.get(0).getPanelMemberType()));
		
		
	}
	
	private List<PanelMember> createPanelMemberMockData(){
		List<PanelMember> panelmembers = new ArrayList<>();
		PanelMember panelmember = new PanelMember();
		panelmember.setPanelMemberId(1);
		panelmember.setPanelMemberType("Hr");
		panelmember.setLocation("hyd");
		panelmembers.add(panelmember);
		return panelmembers;
	
	
	
}
		@Test
		void testGetAllCandidate() {
			List<Candidate>candidatesMockData = createCandidatesMockData();
			when(candidateRepo.findAll()).thenReturn(candidatesMockData);
			
			List<Candidate> candidates=adminService.viewAllCandidates();
			
			assert(candidates.size()==candidatesMockData.size());
			assert(candidates.get(0).getCandidateName().equals(candidatesMockData.get(0).getCandidateName()));
		}
		
		private List<Candidate>createCandidatesMockData(){
			List<Candidate>candidates=new ArrayList<>();
			
			Candidate candidate1 =new Candidate();
			candidate1.setCandidateName("venkatesh");
			candidate1.setExperience(3);
			candidate1.setDesignation("student");
			candidate1.setLocation("Rajamundry");
			candidates.add(candidate1);
			
			
			Candidate candidate2 =new Candidate();
			candidate2.setCandidateName("venkatesh");
			candidate2.setExperience(3);
			candidate2.setDesignation("student");
			candidate2.setLocation("Rajamundry");
			candidates.add(candidate2);
			return candidates;
			
		}
		
		@Test
		void testAddCandidate(){
			
			Candidate candidate =new Candidate();
			candidate.setCandidateName("venkatesh");
			candidate.setExperience(3);
			candidate.setDesignation("student");
			candidate.setLocation("Rajamundry");
			
			when(candidateRepo.save(candidate)).thenReturn(candidate);
			assertEquals(candidate, adminService.addCandidate(candidate));
			
		}
		
		
		
		
		
		
	}
