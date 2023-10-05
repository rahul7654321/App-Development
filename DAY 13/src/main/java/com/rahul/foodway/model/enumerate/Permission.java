package com.rahul.foodway.model.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:READ"),
    ADMIN_CREATE("admin:CREATE"),
    ADMIN_UPDATE("admin:UPDATE"),
    ADMIN_DELETE("admin:DELETE"),

    STAFF_READ("server:READ"),
    STAFF_CREATE("server:CREATE"),
    STAFF_UPDATE("server:UPDATE"),
    STAFF_DELETE("server:DELETE")
    ;
    
    @Getter
    private final String permission;



}
