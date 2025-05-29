import SearchBar from "./SearchBar/SearchBar";
import FormikForm from "./FormikForm/FormikForm";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <FormikForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
