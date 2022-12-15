package com.cg.its.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.its.entities.InterviewSchedule;
@Repository
public interface InterviewScheduleRepo extends JpaRepository<InterviewSchedule, Integer> {

}
