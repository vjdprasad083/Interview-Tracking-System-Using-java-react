package com.cg.its.exception;

import lombok.AllArgsConstructor;


@AllArgsConstructor
public class InterviewNotFoundException extends RuntimeException{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String message;
	

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
