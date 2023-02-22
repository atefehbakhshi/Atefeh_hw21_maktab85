import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contactList } = useSelector((state) => state.form);
  return (
    <div className="mt-4">
      {contactList.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default Contacts;
