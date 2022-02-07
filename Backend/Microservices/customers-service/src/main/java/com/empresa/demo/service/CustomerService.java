package com.empresa.demo.service;

import com.empresa.demo.entity.CustomerEntity;

import java.util.List;

public interface CustomerService {

    List<CustomerEntity> getAll();

    CustomerEntity getById(Long id);

    void delete(Long id);

    void save(CustomerEntity customer);
}
