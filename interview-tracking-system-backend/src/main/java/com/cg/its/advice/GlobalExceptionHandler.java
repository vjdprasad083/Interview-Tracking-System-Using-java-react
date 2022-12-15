package com.cg.its.advice;

import java.util.LinkedHashMap;
import java.util.Map;



import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.its.exception.InterviewNotFoundException;
import com.cg.its.exception.MyLoginException;
import com.cg.its.exception.DetailsNotFoundException;


@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleBadRequest(MethodArgumentNotValidException ex){
		Map<String, String> errors = new LinkedHashMap<>();
		ex.getFieldErrors().stream().forEach(fieldError -> {
			errors.put(fieldError.getField(), fieldError.getDefaultMessage());
		});
		
		return errors;
	}
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(DetailsNotFoundException.class)
	public String handleNotFountException(DetailsNotFoundException e) {	
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(InterviewNotFoundException.class)
	public String handleInterviewNotFountException(InterviewNotFoundException e) {	
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(MyLoginException.class)
	public String handleLoginException(MyLoginException e) {
		return e.getMessage();
	}

}
