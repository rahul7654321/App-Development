package com.rahul.foodway.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/v1/server")

public class ManagementController {
     @GetMapping
    public String get(){
        return "Get:: server controller";
    }
    @PostMapping
    public String post(){
        return "Post:: server controller";
    }

    @PutMapping
    public String update(){
        return "Put:: server controller";
    }
    @DeleteMapping
    public String delete(){
        return "Delete:: server controller";
    }
}
