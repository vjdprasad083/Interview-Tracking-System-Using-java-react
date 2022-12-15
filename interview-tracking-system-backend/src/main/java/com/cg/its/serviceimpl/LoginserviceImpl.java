package com.cg.its.serviceimpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.cg.its.entities.Admin;
import com.cg.its.entities.PanelMember;
import com.cg.its.exception.MyLoginException;
import com.cg.its.repo.PanelMemberRepo;
import com.cg.its.service.LoginService;

public class LoginserviceImpl implements LoginService {
	
	@Autowired
	private PanelMemberRepo panelMemberRepo;

	@Override
	public String Login(Integer userId, String password) throws MyLoginException {
		

			
			Optional<PanelMember> user = panelMemberRepo.findById(userId);
				
			if(user.isPresent() && panelMemberRepo.getReferenceById(userId).getPassword().equals(password)){
					
						return " Login successfull";
					}
					else {
						throw new MyLoginException("Admin or passsword does not match ");

					}
					

	}

}
