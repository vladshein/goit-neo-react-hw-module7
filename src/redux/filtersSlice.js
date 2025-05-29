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

export const filtersReducer = filtersSlice.reducer;
export const { addFilter } = filtersSlice.actions;

// export const addFilter = value => {
//   return { type: "changeFilter", payload: value };
// };
// export const addFilter = createAction("changeFilter");

// export const filtersReducer = createReducer(initialState, builder => {
//   builder.addCase(addFilter, (state, { payload }) => {
//     return {
//       ...state,
//       name: payload,
//     };
//   });
// });

// export const filtersReducer = (
//   state = {
//     name: "",
//   },
//   action
// ) => {
//   switch (action.type) {
//     case addFilter.type: {
//       console.log("addFilter");
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
