import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  if (visibleContacts.length === 0) return <p>No contacts available.</p>;

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
          {console.log(`Item ${contact.id}`)}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
