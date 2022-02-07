package com.empresa.demo.service;

import com.empresa.demo.entity.SupplierEntity;

import java.util.List;

public interface SupplierService {

    List<SupplierEntity> getAll();

    SupplierEntity getById(Long id);

    void delete(Long id);

    void save(SupplierEntity supplier);
}
