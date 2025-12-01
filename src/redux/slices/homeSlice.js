import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  courses: [],
  instructors: []
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setInstructors: (state, action) => {
      state.instructors = action.payload;
    }
  }
});

export const { setCategories, setCourses, setInstructors } = homeSlice.actions;
export default homeSlice.reducer;
