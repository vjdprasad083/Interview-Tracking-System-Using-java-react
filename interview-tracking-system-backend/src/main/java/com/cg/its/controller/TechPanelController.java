package com.cg.its.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.its.entities.Candidate;
import com.cg.its.entities.InterviewSchedule;
import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.DetailsNotFoundException;
import com.cg.its.service.TechPanelService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class TechPanelController {
	
	@Autowired
	private TechPanelService service;
	
	@Validated
	@PutMapping("/tech/interviews/{interview}/{rating}")
	public ResponseEntity<InterviewSchedule> updateinterview(@PathVariable  Integer interview, @PathVariable  Integer rating) throws InterviewNotFoundException{
		InterviewSchedule interviewSchedule =service.giveTechRating(interview,rating);
		return new ResponseEntity<InterviewSchedule>(interviewSchedule,HttpStatus.OK);
	}
	
	@GetMapping("/tech/interviews/candidates")
	public ResponseEntity<List<Candidate>>getInterviewCandidate() throws DetailsNotFoundException {
		List<Candidate> candidate= service.viewInterviewCandidates();
		return new ResponseEntity<List<Candidate>>(candidate,HttpStatus.OK);
	}
	@GetMapping("/tech/interviews/candidate/{candidate}")
	public ResponseEntity<Candidate> getInterviewCandidateById(@PathVariable Integer candidate) throws DetailsNotFoundException{
		Candidate candidateRef=service.getInterviewCandidateById(candidate);
		return new ResponseEntity<Candidate>(candidateRef,HttpStatus.OK);
	}
	

	@GetMapping("/tech/interviews")
	public ResponseEntity<List<InterviewSchedule>> getTechInterviews() throws InterviewNotFoundException{
		List<InterviewSchedule> interviews=service.getTechInterviews();
		return  new ResponseEntity<List<InterviewSchedule>>(interviews,HttpStatus.OK);
	}
	

}
