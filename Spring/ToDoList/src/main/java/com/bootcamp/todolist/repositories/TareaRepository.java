package com.bootcamp.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer>{
	
}
// repositorio.save(objeto) --> insert
// repositorio.delete(objeto) --> delete
//findAll()
//findById()
//deleteById()
//updateById()

//getByEstado() 