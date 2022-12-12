import { configureStore } from "@reduxjs/toolkit";
import PortSlice from "./ports/ports.slice";
import profileReducer from "./profile/profiles.slice";

export default configureStore({
    reducer: { 
        profiles: profileReducer,
        ports: PortSlice 
    }
})