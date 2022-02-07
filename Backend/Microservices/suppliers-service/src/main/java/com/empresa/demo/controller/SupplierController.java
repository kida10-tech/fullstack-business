package com.empresa.demo.controller;

import com.empresa.demo.entity.SupplierEntity;
import com.empresa.demo.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping("/api/suppliers")
    public List<SupplierEntity> getAll() {
        return supplierService.getAll();
    }

    @GetMapping("/api/suppliers/{id}")
    public SupplierEntity getById(@PathVariable Long id) {
        return supplierService.getById(id);
    }

    @DeleteMapping("/api/suppliers/{id}")
    public void delete(@PathVariable Long id) {
        supplierService.delete(id);
    }

    @PostMapping("/api/suppliers")
    public void save(@RequestBody SupplierEntity supplier) {
        supplierService.save(supplier);
    }
}

