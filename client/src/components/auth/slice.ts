import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData: {},
    signInData: {},
    isLoading: false
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeSignUpData: (state, action) => {
            state.isLoading = true;
            state.signUpData = action.payload
        },
        updateLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        storeSignInData: (state, action) => {
            state.isLoading = true;
            state.signInData = action.payload;
        }
    }
});

const auth = (state: any) => state.auth;

export { authSlice, auth };