package com.cg.its.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.its.entities.Admin;


@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {

}
