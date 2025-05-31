import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6838cee96561b8d882ae43ed.mockapi.io";

const fetchContactsOp = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts/");
      console.log("response.data.results", data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContactOp = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    console.log("Name, number:", name, number);
    try {
      const { data } = await axios.post("/contacts/", {
        name,
        number,
      });
      return { name: data.name, number: data.number, id: data.id };
    } catch (error) {
      console.error("Error adding contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContactOp = createAsyncThunk(
  "contacts/deleteContact",
  async function deleteContactOp(id, thunkAPI) {
    console.log("Delete id:", id);
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      console.log("Contact deleted:", data);
      return id;
    } catch (error) {
      console.error("Error adding contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// async function deleteContactOp(id) {
//   console.log("Delete id:", id);
//   try {
//     const response = await axios.delete(`/contacts/${id}`);

//     console.log("Contact deleted:", response.data);
//   } catch (error) {
//     console.error("Error adding contact:", error);
//   }
// }
export { fetchContactsOp, addContactOp, deleteContactOp };
