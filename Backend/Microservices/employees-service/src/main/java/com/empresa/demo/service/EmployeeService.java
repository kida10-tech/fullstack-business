package com.empresa.demo.service;

import com.empresa.demo.entity.EmployeeEntity;

import java.util.List;

public interface EmployeeService {

    List<EmployeeEntity> getAll();

    EmployeeEntity getById(Long id);

    void delete(Long id);

    void save(EmployeeEntity employee);
}
