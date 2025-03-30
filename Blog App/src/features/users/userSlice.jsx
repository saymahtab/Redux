import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'John',
  }
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer