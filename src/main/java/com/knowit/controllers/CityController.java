package com.knowit.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.knowit.entities.City;
import com.knowit.services.CitiesSevice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cities")
public class CityController {

    @Autowired
    CitiesSevice cservice;

    @GetMapping
    public List<City> getAllCity() {
        return cservice.getAllCities();
    }
}
