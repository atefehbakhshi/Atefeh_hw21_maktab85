import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contactList } = useSelector((state) => state.form);
  return (
    <div className="mt-4 md:grid grid-cols-2 lg:grid-cols-3 max-w-7xl">
      {contactList.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default Contacts;
