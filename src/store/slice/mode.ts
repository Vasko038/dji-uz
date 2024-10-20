import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  const mode = localStorage.getItem("theme");
  return mode ? mode : "light";
};
const themeMode = createSlice({
  name: "mode",
  initialState: {
    mode: getInitialMode(),
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("mode", state.mode);
    },
  },
});
export const { toggleMode } = themeMode.actions;

export default themeMode.reducer;
