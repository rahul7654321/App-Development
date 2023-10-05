package com.rahul.foodway.service;

import org.springframework.stereotype.Service;

import com.rahul.foodway.dto.response.UserResponseDto;

@Service
public interface UserService {
    UserResponseDto getAllUser();
}
