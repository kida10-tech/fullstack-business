package com.empresa.demo.service.implementation;

import com.empresa.demo.entity.CustomerEntity;
import com.empresa.demo.repository.CustomerRepository;
import com.empresa.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerEntity> getAll() {
       return customerRepository.findAll();
    }

    @Override
    public CustomerEntity getById(Long id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public void save(CustomerEntity customer) {
        customerRepository.save(customer);
    }
}
