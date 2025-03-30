import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Hey This is my First Blog",
    content: "The more I say slice , the more i want pizza",
    userId: "1",
    date: sub(new Date(), { minutes:10 }).toISOString()
  },
  {
    id: "2",
    title: "Hey This is my Second Blog",
    content: "The more I say slice , the more i want pizza",
    userId: "2",
    date: sub(new Date(), { minutes:5 }).toISOString()
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            userId,
            title,
            content,
            date: new Date().toISOString()
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
