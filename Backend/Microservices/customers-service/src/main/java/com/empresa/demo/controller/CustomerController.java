package com.empresa.demo.controller;

import com.empresa.demo.entity.CustomerEntity;
import com.empresa.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/api/customers")
    public List<CustomerEntity> getAll() {
        return customerService.getAll();
    }

    @GetMapping("/api/customers/{id}")
    public CustomerEntity getById(@PathVariable Long id) {
        return customerService.getById(id);
    }

    @DeleteMapping("/api/customers/{id}")
    public void delete(@PathVariable Long id) {
        customerService.delete(id);
    }

    @PostMapping("/api/customers")
    public void save(@RequestBody CustomerEntity customer) {
        customerService.save(customer);
    }
}
