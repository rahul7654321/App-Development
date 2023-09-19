import { configureStore } from "@reduxjs/toolkit";

configureStore({
    reducer:{

        user:userSlice.reducer
    }
    
})

