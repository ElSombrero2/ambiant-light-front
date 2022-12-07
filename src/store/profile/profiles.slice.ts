import { createSlice, current } from "@reduxjs/toolkit";
import { Profile } from "../../@types/profile";


export const ProfilesSlice = createSlice({
    name: 'profiles',
    initialState: {
        profiles: [] as Profile[],
        currentProfile: null as Profile | null
    },
    reducers: {
        add: (state, action) => { 
            state.profiles.push(action.payload)
            state.currentProfile = action.payload 
        },
        remove: (state, action) => { 
            state.profiles.splice(action.payload, 1)
            state.currentProfile = state.profiles[action.payload - 1] || null 
        },
        changeCurrentProfile: (state, action) => {  state.currentProfile = action.payload }
    }
})

export const { add, remove, changeCurrentProfile } = ProfilesSlice.actions

export default ProfilesSlice.reducer