package com.empresa.demo.service.implementation;

import com.empresa.demo.entity.EmployeeEntity;
import com.empresa.demo.repository.EmployeeRepository;
import com.empresa.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeEntity> getAll() {
        return employeeRepository.findAll();
    }

    @Override
    public EmployeeEntity getById(Long id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public void save(EmployeeEntity employee) {
        employeeRepository.save(employee);
    }
}
