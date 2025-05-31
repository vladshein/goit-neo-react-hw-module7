import { createSlice } from "@reduxjs/toolkit";
// import initialList from "../initialContactList";
import { fetchContactsOp, addContactOp, deleteContactOp } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, { payload }) => {
  //     return {
  //       ...state,
  //       items: [...state.items, payload],
  //     };
  //   },
  //   deleteContact: (state, { payload }) => {
  //     return {
  //       ...state,
  //       items: state.items.filter(item => item.id !== payload),
  //     };
  //   },
  //   setLoading: (state, { payload }) => {
  //     return {
  //       ...state,
  //       loading: payload,
  //     };
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsOp.pending, state => {
        state.loading = true;
        console.log("state", state);
      })
      .addCase(fetchContactsOp.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchContactsOp.rejected, (state, { payload }) => {
        console.log("error", payload);
        state.loading = false;
      })
      .addCase(addContactOp.pending, state => {
        state.loading = true;
        console.log("state", state);
      })
      .addCase(addContactOp.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContactOp.rejected, (state, { payload }) => {
        state.loading = false;
        console.log("error", payload);
      })
      .addCase(deleteContactOp.pending, state => {
        state.loading = true;
        console.log("state", state);
      })
      .addCase(deleteContactOp.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("payload", payload);
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContactOp.rejected, (state, { payload }) => {
        state.loading = false;
        console.log("error", payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact, setLoading } = contactsSlice.actions;
