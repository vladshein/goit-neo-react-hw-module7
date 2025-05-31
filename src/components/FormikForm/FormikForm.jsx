import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./FormikForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { addContact, setLoading } from "../../redux/contactsSlice";
import { addContactOp } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

const FormikForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // dispatch(
    //   addContact({
    //     id: Date.now(),
    //     name: values.name,
    //     number: values.number,
    //   })
    // );
    dispatch(
      addContactOp({
        name: values.name,
        number: values.number,
      })
    );
    console.log(value);

    actions.resetForm();
  };

  const value = useSelector(state => state.contacts.items);
  console.log(value);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="phone" name="number" id={phoneFieldId} />
          <ErrorMessage name="number" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
