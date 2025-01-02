package com.knowit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.knowit.entities.Customer;
import com.knowit.services.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

    @Autowired
    CustomerService cusServ;

    @PostMapping("/register")
    public ResponseEntity<Customer> registerCust(@RequestParam String name,
                                                     @RequestParam String email,
                                                     @RequestParam String password,
                                                     @RequestParam String address,
                                                     @RequestParam String adharNumber,
                                                     @RequestParam String drivingLicenseNo,
                                                     @RequestParam String contact,
                                                     @RequestParam int cityId) {
        Customer customer = cusServ.registerCustomer(name, email, password, address, adharNumber, drivingLicenseNo, contact, cityId);
        return ResponseEntity.ok(customer);
                                                     }
}
