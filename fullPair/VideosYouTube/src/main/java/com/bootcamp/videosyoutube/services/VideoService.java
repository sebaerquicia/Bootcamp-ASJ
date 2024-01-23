package com.bootcamp.videosyoutube.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.bootcamp.videosyoutube.models.VideoModel;
import com.bootcamp.videosyoutube.repositories.VideoRepository;

@Service
public class VideoService {

	
	@Autowired
	VideoRepository videoRepository;
	
	
	// Para obtener Videos
	public List<VideoModel> obtenerVideos(){
		return videoRepository.findAll();
	}
	
	// Para obtener videos por 1 id
	public Optional<VideoModel> ObtenerVideoById(int id){
		return videoRepository.findById(id); 
	}

	// Para insertar video
	public List<VideoModel> cargarVideo(VideoModel video) {
		videoRepository.save(video);
		return videoRepository.findAll();
	}
	
	// Para agregar vistas
	public List<VideoModel> sumarVista(int id) {
		VideoModel aux = videoRepository.findById(id).get();
		if(aux != null) {
			aux.setViews(aux.getViews() + 1);
			videoRepository.save(aux);
		}
		return videoRepository.findAll();
	}
	
	// Agregar likes
	public List<VideoModel> sumarLike(int id) {
		VideoModel aux = videoRepository.findById(id).get();
		if(aux != null) {
			aux.setLikes(aux.getLikes() + 1);
			videoRepository.save(aux);
		}
		return videoRepository.findAll();
	}
	// Agregar dislikes
	public List<VideoModel> sumarDislike(int id) {
		VideoModel aux = videoRepository.findById(id).get();
		if(aux != null) {
			aux.setDislikes(aux.getDislikes() + 1);
			videoRepository.save(aux);
		}
		return videoRepository.findAll();
	}
	
	
	// Para eliminar video
	public List<VideoModel> eliminarVideo(int id) {
		videoRepository.deleteById(id);
		return videoRepository.findAll();
	}
}
