import { createSlice } from "@reduxjs/toolkit";

export const PortSlice = createSlice({
    name: 'ports',
    initialState: {
        ports: [] as string[]
    },
    reducers: {
        set: (state, action) => {
            state.ports = [...action.payload]
        }
    }
})

export const { set } = PortSlice.actions

export default PortSlice.reducer