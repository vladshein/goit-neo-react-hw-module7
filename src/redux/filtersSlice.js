import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      return {
        ...state,
        name: payload,
      };
    },
  },
});

export const selectNameFilter = state => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
export const { addFilter } = filtersSlice.actions;
