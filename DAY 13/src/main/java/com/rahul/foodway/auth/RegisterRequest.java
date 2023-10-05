package com.rahul.foodway.auth;

import com.rahul.foodway.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String username;
    private String password;

    private Role role;

}
