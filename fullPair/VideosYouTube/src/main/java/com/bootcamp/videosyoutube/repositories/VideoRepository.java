package com.bootcamp.videosyoutube.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.videosyoutube.models.VideoModel;

public interface VideoRepository extends JpaRepository<VideoModel, Integer>{
	
}