import { createSlice } from "@reduxjs/toolkit";

// Initial state without TypeScript typings
const initialState = {
    token: "",
    user: "",
};

// Creating the slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action) => {
            state.token = action.payload.token;
        },
        userLoggedIn: (state, action) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
            
        }, 
        userLoggedOut: (state) => {
            state.token = "";
            state.user = "";
        },
    },
});

export const { userRegistration, userLoggedOut, userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
