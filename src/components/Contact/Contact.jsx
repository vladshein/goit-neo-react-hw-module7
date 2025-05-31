import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContactOp } from "../../redux/contactsOps";

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactOp(id));
  };

  return (
    <div className={css.container}>
      <div>
        <div>
          <div className={css.item}>
            <FaUser size="18" />
            {name}
          </div>
          <div className={css.item}>
            <FaPhoneAlt size="18" />
            {number}
          </div>
        </div>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
