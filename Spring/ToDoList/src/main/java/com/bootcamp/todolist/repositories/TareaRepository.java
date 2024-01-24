package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.todolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer>{
	@Query(value="SELECT id, nombre, estado, descripcion FROM tareas t WHERE descripcion LIKE %:texto% ORDER BY t.id DESC", nativeQuery=true)
	List<TareaModel> myQuery(@Param("texto") String texto);
	
	List<TareaModel> findByNombreLike(String a); 
	
}
// repositorio.save(objeto) --> insert
// repositorio.delete(objeto) --> delete
//findAll()
//findById()
//deleteById()
//updateById()

//getByEstado() 