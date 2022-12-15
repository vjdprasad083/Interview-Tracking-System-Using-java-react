package com.cg.its.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.its.entities.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

	
}
