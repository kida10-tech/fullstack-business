package com.empresa.demo.service.implementation;

import com.empresa.demo.entity.SupplierEntity;
import com.empresa.demo.repository.SupplierRepository;
import com.empresa.demo.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<SupplierEntity> getAll() {
        return supplierRepository.findAll();
    }

    @Override
    public SupplierEntity getById(Long id) {
        return supplierRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        supplierRepository.deleteById(id);
    }

    @Override
    public void save(SupplierEntity supplier) {
        supplierRepository.save(supplier);
    }
}

