import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTheme: "default",
    previousTheme: "default"
  };

  const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.previousTheme = action.payload.oldTheme;
            state.selectedTheme = action.payload.newTheme;
          }
    }});

    export default themeSlice.reducer;

    export const { changeTheme } = themeSlice.actions;
