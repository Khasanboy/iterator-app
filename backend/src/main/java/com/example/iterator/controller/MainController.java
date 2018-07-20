package com.example.iterator.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.iterator.model.Response;

@RestController
@RequestMapping("/api")
public class MainController {
	
	@GetMapping("/search/{id}")
	public Response getSearchResponse(@PathVariable  Long id) {
		if(id==70) {
			return new Response("redirect", "http://localhost:8080/api/search/"+(id+1));
		}else {
			return new Response("xhr", "http://localhost:8080/api/search/"+(id+1));
		}
	}
}
