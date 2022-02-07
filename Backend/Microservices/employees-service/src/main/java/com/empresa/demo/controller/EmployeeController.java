package com.empresa.demo.controller;

import com.empresa.demo.entity.EmployeeEntity;
import com.empresa.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/api/employees")
    public List<EmployeeEntity> getAll() {
        return employeeService.getAll();
    }

    @GetMapping("/api/employees/{id}")
    public EmployeeEntity getById(@PathVariable Long id) {
        return employeeService.getById(id);
    }

    @DeleteMapping("/api/employees/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.delete(id);
    }

    @PostMapping("/api/employees")
    public void save(@RequestBody EmployeeEntity employee) {
        employeeService.save(employee);
    }
}

