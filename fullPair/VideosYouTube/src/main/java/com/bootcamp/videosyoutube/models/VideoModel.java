package com.bootcamp.videosyoutube.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "videos")
public class VideoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String title;
	
	private String category;
	
	private String url;
	
	private String description;
	
	private Integer views;
	
	private Integer likes;
	
	private Integer dislikes;
	
	
	//constructor vacio
	public VideoModel() {

	}

	//constructor
	public VideoModel(Integer id, String title, String category, String url, String description, Integer views,
			Integer likes, Integer dislikes) {
		super();
		this.id = id;
		this.title = title;
		this.category = category;
		this.url = url;
		this.description = description;
		this.views = views;
		this.likes = likes;
		this.dislikes = dislikes;
	}



	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getViews() {
		return views;
	}

	public void setViews(Integer views) {
		this.views = views;
	}

	public Integer getLikes() {
		return likes;
	}

	public void setLikes(Integer likes) {
		this.likes = likes;
	}

	public Integer getDislikes() {
		return dislikes;
	}

	public void setDislikes(Integer dislikes) {
		this.dislikes = dislikes;
	}
	
	
}
	