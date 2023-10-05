package com.rahul.foodway;

import com.rahul.foodway.auth.AuthenticationService;
import com.rahul.foodway.auth.RegisterRequest;
import com.rahul.foodway.model.enumerate.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class FoodwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodwayApplication.class, args);

	}
	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service
		){
			return args -> {
				var admin = RegisterRequest.builder().firstname("Rahul").lastname("M").username("Foodway").password("Foodwayadmin")
				.role(Role.ADMIN).build();
				System.out.println("Admin Token : "+ service.register(admin).getToken());


				var staff = RegisterRequest.builder().firstname("Server").lastname("1").username("server123").password("server@123")
				.role(Role.STAFF).build();

				System.out.println("Server Token : "+ service.register(staff).getToken());
			};
		}

}
