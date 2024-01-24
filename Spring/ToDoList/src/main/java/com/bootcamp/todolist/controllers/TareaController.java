package com.bootcamp.todolist.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.ErrorHandler;
import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.services.TareaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tareas") //localhost:8080/tareas
public class TareaController {
	
	@Autowired
	TareaService tareaService;

//	@GetMapping("/test")
//	public ResponseEntity<String> testing() {
//		return ResponseEntity.ok("Aber");
//	}		
	
	@GetMapping() //localhost:8080/tareas
	public ResponseEntity<List<TareaModel>> getTareas() {
		return ResponseEntity.ok(tareaService.obtenerTareas()); //CTRL +SSS
	}
	
	@GetMapping("/{id}") //[GET] localhost:8080/tareas/3
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.ObtenerTareaById(id));
	}
	
	@PostMapping() //[POST] localhost:8080/tareas
	public ResponseEntity<Object> createTarea(@Valid @RequestBody TareaModel tarea, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);			
			}
		return new ResponseEntity<>(tareaService.crearTarea(tarea), HttpStatus.OK);
		}
	
	
	@PutMapping("/{id}") //[PUT] localhost:8080/tareas/3
	public ResponseEntity<String> updateTarea(@PathVariable int id, @RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaService.modificarTarea(id,tarea)); 
	}
	
	
	@DeleteMapping("/{id}") //[DELETE] localhost:8080/tareas/6
	public ResponseEntity<List<TareaModel>> deleteTarea(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.eliminarTarea(id));
	}
	
}
