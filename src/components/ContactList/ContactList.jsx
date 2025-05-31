import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const contactList = useSelector(state => state.contacts.items);

  console.log("Contact list", contactList);
  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
