package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	
	@Autowired
	TareaRepository tareaRepository;
	
	
	// Para obtener Tareas
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll(); // findAll() actua como  SELECT * FROM tareas en SQL y viene por defecto en JPA
	}
	
	//para obtener 1 tarea segun id
	public Optional<TareaModel> ObtenerTareaById(int id){
		return tareaRepository.findById(id); 
	}

	// Para insertar tarea
	public List<TareaModel> crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return tareaRepository.findAll();
	}
	
	
	// Para modificar tarea
	public String modificarTarea(int id, TareaModel tarea) {
		TareaModel t = tareaRepository.findById(id).get(); // Obtengo todos las Tareas que coinciden con el id
		if(t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			tareaRepository.save(t);
			return "Tarea #" + id +" modificada";
		}
		return "No se encontro la tarea";
		
	}
	
	// Para eliminar tarea
	public List<TareaModel> eliminarTarea(int id) {
		tareaRepository.deleteById(id);
		return tareaRepository.findAll();
	}
	
}
