package com.bootcamp.videosyoutube.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.videosyoutube.models.VideoModel;
import com.bootcamp.videosyoutube.services.VideoService;

@RestController
@RequestMapping("/videos") //localhost:8080/videos
public class VideoController {

	
	@Autowired
	VideoService videoService;

	@GetMapping() //localhost:8080/videos
	public ResponseEntity<List<VideoModel>> getTareas() {
		return ResponseEntity.ok(videoService.obtenerVideos()); 
	}
	
	@GetMapping("/{id}") //[GET] localhost:8080/videos/3
	public ResponseEntity<Optional<VideoModel>> getVideoById(@PathVariable int id) {
		return ResponseEntity.ok(videoService.ObtenerVideoById(id));
	}
	
	@PostMapping() //[POST] localhost:8080/videos
	public ResponseEntity<List<VideoModel>> cargarVideo(@RequestBody VideoModel video){
		return ResponseEntity.ok(videoService.cargarVideo(video));
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<List<VideoModel>> sumarVista(@PathVariable int id) {
		return ResponseEntity.ok(videoService.sumarVista(id));
	}
	@PutMapping("/like/{id}")
	public ResponseEntity<List<VideoModel>> sumarLike(@PathVariable int id) {
		return ResponseEntity.ok(videoService.sumarLike(id));
	}
	@PutMapping("/dislike/{id}")
	public ResponseEntity<List<VideoModel>> sumarDislike(@PathVariable int id) {
		return ResponseEntity.ok(videoService.sumarDislike(id));
	}
	
	@DeleteMapping("/{id}") //[DELETE] localhost:8080/videos/6
	public ResponseEntity<List<VideoModel>> deleteVideo(@PathVariable int id) {
		return ResponseEntity.ok(videoService.eliminarVideo(id));
	}
	
}
