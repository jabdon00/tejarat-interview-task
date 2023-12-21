import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
    id: string;
    username: string;
    authorized: boolean
    token: string
}

const initialState: User = {
    id: '',
    username: '',
    authorized: false,
    token:''
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state = action.payload
            return state
        },
    },
});

export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;