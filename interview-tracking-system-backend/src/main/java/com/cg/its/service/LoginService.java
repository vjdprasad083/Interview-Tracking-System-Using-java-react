package com.cg.its.service;

import com.cg.its.exception.MyLoginException;

public interface LoginService {

	String Login(Integer userId,String password)throws MyLoginException;

}
