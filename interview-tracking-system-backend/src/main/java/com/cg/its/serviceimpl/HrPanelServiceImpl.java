package com.cg.its.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.its.entities.Candidate;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.entities.PanelMember;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.DetailsNotFoundException;
import com.cg.its.repo.CandidateRepo;
import com.cg.its.repo.InterviewScheduleRepo;
import com.cg.its.repo.PanelMemberRepo;



@Service
public class HrPanelServiceImpl implements com.cg.its.service.HrPanelService {
	

	@Autowired
	private InterviewScheduleRepo interviewScheduleRepo;
	
	@Autowired
	private CandidateRepo candidateRepo;
	
	@Autowired
	private PanelMemberRepo panelMemberRepo;
	
	
	@Override
	public InterviewSchedule giveHrRating(Integer interviewScheduleId, Integer rating) throws InterviewNotFoundException {

		Optional<InterviewSchedule> interview= interviewScheduleRepo.findById(interviewScheduleId);
		if(interview.isPresent()) {
			interview.get().setInterviewSchduleId(interviewScheduleId);
			interview.get().setHrRating(rating);
			
			return interviewScheduleRepo.save(interview.get());
		
		}
		else {
			throw new InterviewNotFoundException("interview not found");
			}
		
	}

	@Override
	public Candidate getInterviewCandidateById(Integer candidateId) throws DetailsNotFoundException {
		
		Optional<Candidate> candidate= candidateRepo.findById(candidateId);
		if(candidate.isPresent()) {
			return candidate.get();
		}
		else {
			throw new DetailsNotFoundException("candidate not found");
		}
		
	}

	@Override
	public List<Candidate> viewInterviewCandidates(Integer panelMemberId) throws DetailsNotFoundException {
		
		Optional<PanelMember> p= panelMemberRepo.findById(panelMemberId);
		
		if(p.isPresent()) {
			List<Candidate> interviewCandidatesList= new ArrayList<Candidate>();
			interviewScheduleRepo.findAll().stream().filter(list -> list.getPanelMember().equals(p.get())).forEach(s -> interviewCandidatesList.add(s.getCandidate()));
			if(interviewCandidatesList.isEmpty()) {
				throw new DetailsNotFoundException("candidates not found");
			}
			else {
				return interviewCandidatesList;
			}
		}
		else {
			throw new DetailsNotFoundException("Candidates not found");
		}
	}
	
	
	@Override
	public List<InterviewSchedule> getHrInterviews( Integer panelMemberId )throws DetailsNotFoundException {
		
		
		Optional<PanelMember> p= panelMemberRepo.findById(panelMemberId);
		
		if(p.isPresent()) {
		
			List<InterviewSchedule> interviews= new ArrayList<InterviewSchedule>();
					interviewScheduleRepo.findAll().stream().filter(list-> list.getPanelMember().equals(p.get())).forEach(s -> interviews.add(s));
			if(interviews.isEmpty()) {
				throw new InterviewNotFoundException("No Interviews Scheduled");
			}
			else {
				return interviews;
			}
		}
		else {
			throw new DetailsNotFoundException("Interviews not found");
		}
	

}
}
