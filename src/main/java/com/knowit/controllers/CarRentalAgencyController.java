package com.knowit.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.knowit.entities.CarRentalAgency;
import com.knowit.services.CarRentalAgencyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarRentalAgencyController {

    @Autowired
    private CarRentalAgencyService carRentalAgencyServ;

    // Endpoint to create a new Car Rental Agency
    @PostMapping("/api/car-rental-agencies/registerAgency")
    public ResponseEntity<CarRentalAgency> createCarRentalAgency(@RequestBody CarRentalAgency agency) {
        CarRentalAgency savedAgency = carRentalAgencyServ.saveCarRentalAgency(agency);
        return new ResponseEntity<>(savedAgency, HttpStatus.CREATED);
    }

    // Endpoint to get all Car Rental Agencies
    @GetMapping("/api/car-rental-agencies")
    public ResponseEntity<List<CarRentalAgency>> getAllCarRentalAgencies() {
        List<CarRentalAgency> agencies = carRentalAgencyServ.getAllCarRentalAgencies();
        return new ResponseEntity<>(agencies, HttpStatus.OK);
    }

    // Endpoint to get a Car Rental Agency by ID
    @GetMapping("/api/car-rental-agencies/{id}")
    public ResponseEntity<CarRentalAgency> getCarRentalAgencyById(@PathVariable int id) {
        return carRentalAgencyServ.getCarRentalAgencyById(id)
                .map(agency -> new ResponseEntity<>(agency, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
