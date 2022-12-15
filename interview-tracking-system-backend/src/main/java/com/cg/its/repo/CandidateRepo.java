package com.cg.its.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.its.entities.Candidate;

@Repository
public interface CandidateRepo extends JpaRepository<Candidate, Integer> {
	

}
