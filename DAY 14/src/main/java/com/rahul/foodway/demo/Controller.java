package com.rahul.foodway.demo;

import com.rahul.foodway.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rahul.foodway.dto.response.UserResponseDto;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class Controller {

   private final UserService service;

   @GetMapping("/get")
   public ResponseEntity<UserResponseDto> getAllUser(){
    UserResponseDto userResponseDto = service.getAllUser();
    return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
   }

   
    

}
