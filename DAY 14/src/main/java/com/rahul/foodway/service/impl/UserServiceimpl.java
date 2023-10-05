package com.rahul.foodway.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rahul.foodway.dto.response.UserResponseDto;
import com.rahul.foodway.model.User;
import com.rahul.foodway.repository.UserRepository;
import com.rahul.foodway.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceimpl implements UserService{

    private final UserRepository userRepo;

    @Override
    public UserResponseDto getAllUser() {
       
        List<User> userList = userRepo.findAll();
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setUsers(userList);
        return userResponse;
        
    }
    
}
