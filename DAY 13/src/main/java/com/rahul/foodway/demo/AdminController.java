package com.rahul.foodway.demo;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    @GetMapping
    @PreAuthorize("hasAuthority('admin:READ')")
    public String get(){
        
        return "Get:: admin controller";
    }
    @PostMapping
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public String post(){
        return "Post:: admin controller";
    }

    @PutMapping
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public String update(){
        return "Put:: admin controller";
    }
    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String delete(){
        return "Delete:: admin controller";
    }
}
