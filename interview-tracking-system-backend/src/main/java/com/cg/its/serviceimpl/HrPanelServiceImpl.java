package com.cg.its.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.its.entities.Candidate;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.DetailsNotFoundException;
import com.cg.its.repo.CandidateRepo;
import com.cg.its.repo.InterviewScheduleRepo;



@Service
public class HrPanelServiceImpl implements com.cg.its.service.HrPanelService {
	

	@Autowired
	private InterviewScheduleRepo interviewScheduleRepo;
	
	@Autowired
	private CandidateRepo candidateRepo;
	
	
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
	public List<Candidate> viewInterviewCandidates() throws DetailsNotFoundException {
		
		List<Candidate> interviewCandidatesList= new ArrayList<Candidate>();
		interviewScheduleRepo.findAll().stream().forEach(list-> interviewCandidatesList.add(list.getCandidate()));
		if(interviewCandidatesList.isEmpty()) {
			throw new DetailsNotFoundException("candidate not found");
		}
		else {
		return interviewCandidatesList;
		}
	}
	
	
	@Override
	public List<InterviewSchedule> getHrInterviews() {
		
		List<InterviewSchedule> interviews=interviewScheduleRepo.findAll();
		if(interviews.isEmpty()) {
			throw new InterviewNotFoundException("No Interviews Scheduled");
		}
		else {
			return interviews;
		}
	}
	

}
