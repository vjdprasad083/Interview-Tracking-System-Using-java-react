package com.cg.its.service;

import java.util.List;

import com.cg.its.entities.Candidate;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.exception.InterviewNotFoundException;

import com.cg.its.exception.DetailsNotFoundException;

public interface HrPanelService {
	
	
	public InterviewSchedule giveHrRating(Integer rating, Integer interviewScheduleId)throws InterviewNotFoundException;
	public List<Candidate> viewInterviewCandidates() throws DetailsNotFoundException;
	public Candidate getInterviewCandidateById(Integer candidateId) throws DetailsNotFoundException;
	public List<InterviewSchedule> getHrInterviews ()throws InterviewNotFoundException;
}
