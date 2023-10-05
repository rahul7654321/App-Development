package com.rahul.foodway.repository;

import com.rahul.foodway.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String>{

   
    
}
