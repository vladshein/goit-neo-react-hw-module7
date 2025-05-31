import SearchBar from "./SearchBar/SearchBar";
import FormikForm from "./FormikForm/FormikForm";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";
// import { addContact, deleteContact, fetchContacts } from "../api/api";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsOp } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.contacts.loading);
  // const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsOp());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <FormikForm />
      <SearchBar />
      {/* {isLoading ? <h2>Loading...</h2> : <ContactList />} */}
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default App;
