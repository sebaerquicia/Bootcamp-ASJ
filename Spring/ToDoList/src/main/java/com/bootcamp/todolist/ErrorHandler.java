package com.bootcamp.todolist;

import java.util.HashMap;
import java.util.Map;

import org.springframework.validation.BindingResult;

public class ErrorHandler {
	
	public Map<String, String> validacionInputs(BindingResult bindingResult) {
		
	Map<String, String> errors = new HashMap<>();
	
	bindingResult.getFieldErrors().forEach((error) -> {
		String campo = error.getField();
		String errorMsj = error.getDefaultMessage();
		errors.put(campo, errorMsj);
	});
	return errors;
	}
}