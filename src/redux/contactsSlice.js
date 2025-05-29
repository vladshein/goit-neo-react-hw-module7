import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import initialList from "../initialContactList";

const initialState = {
  items: initialList,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload], // Creates a new array
      };
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, { payload }) => {
//       return {
//         ...state,
//         items: [...state.items, payload], // Creates a new array
//       };
//     })
//     .addCase(deleteContact, (state, { payload }) => {
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== payload),
//       };
//     });
// });

// export const addContact = createAction("addContact");
// export const deleteContact = createAction("deleteContact");

// export const addContact = value => {
//   return {
//     type: "addContact",
//     payload: value,
//   };
// };

// export const deleteContact = value => {
//   return { ty pe: "deleteContact", payload: value };
// };

// export const contactsReducer = (
//   state = {
//     items: initialList,
//   },
//   action
// ) => {
//   switch (action.type) {
//     case addContact.type: {
//       console.log("addContact");
//       return {
//         ...state,
//         items: [...state.items, action.payload], // Creates a new array
//       };
//     }

//     case deleteContact.type: {
//       console.log("addContact");
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };
