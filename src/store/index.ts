import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile/profiles.slice";

export default configureStore({
    reducer: { profiles: profileReducer }
})