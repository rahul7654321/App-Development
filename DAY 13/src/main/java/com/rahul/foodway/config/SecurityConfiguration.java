package com.rahul.foodway.config;

import static com.rahul.foodway.model.enumerate.Permission.ADMIN_CREATE;
import static com.rahul.foodway.model.enumerate.Permission.ADMIN_DELETE;
import static com.rahul.foodway.model.enumerate.Permission.ADMIN_READ;
import static com.rahul.foodway.model.enumerate.Permission.ADMIN_UPDATE;
import static com.rahul.foodway.model.enumerate.Permission.STAFF_CREATE;
import static com.rahul.foodway.model.enumerate.Permission.STAFF_DELETE;
import static com.rahul.foodway.model.enumerate.Permission.STAFF_READ;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.rahul.foodway.model.enumerate.Permission;
import com.rahul.foodway.model.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthencationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
       http
       .csrf(csrf -> csrf.disable())
       .authorizeHttpRequests(authorize -> authorize.requestMatchers("/api/v1/auth/server/**").permitAll()
       //Roles & Permissions
       .requestMatchers("/api/v1/server/**").hasAnyRole(Role.ADMIN.name(), Role.STAFF.name())
       
       
       .requestMatchers(HttpMethod.GET, "/api/v1/server/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name())
       .requestMatchers(HttpMethod.POST, "/api/v1/server/**").hasAnyAuthority(ADMIN_CREATE.name(), STAFF_CREATE.name())
       .requestMatchers(HttpMethod.PUT, "/api/v1/server/**").hasAnyAuthority(ADMIN_UPDATE.name(), Permission.STAFF_UPDATE.name())
       .requestMatchers(HttpMethod.DELETE, "/api/v1/server/**").hasAnyAuthority(ADMIN_DELETE.name(), STAFF_DELETE.name())
       

       
       .anyRequest().authenticated())
       .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
       .authenticationProvider(authenticationProvider)
       .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();

    }
}








































//    .requestMatchers("/api/v1/admin/**").hasRole(Role.ADMIN.name())
//    .requestMatchers(HttpMethod.GET, "api/v1/admin/**").hasAuthority(Permission.ADMIN_READ.name())
//    .requestMatchers(HttpMethod.POST, "api/v1/admin/**").hasAuthority(Permission.ADMIN_CREATE.name())
//    .requestMatchers(HttpMethod.PUT, "api/v1/admin/**").hasAuthority(Permission.ADMIN_UPDATE.name())
//    .requestMatchers(HttpMethod.DELETE, "api/v1/admin/**").hasAuthority(Permission.ADMIN_DELETE.name())

//END