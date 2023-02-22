import { Icon } from "@iconify/react";

const ContactItem = ({ contact }) => {
  return (
    <div className="flex justify-between gap-4 p-4 bg-[#4e364e] rounded-lg w-[90%] mx-auto my-2 text-white">
      <ul className="flex flex-col gap-2">
        <li>
          {contact.name} {contact.family}
        </li>
        <li>{contact.relation}</li>
        <li>{contact.email}</li>
      </ul>
      <div className="flex gap-2">
        <Icon icon="bxs:trash" color="white" width="22" />
        <Icon
          icon="material-symbols:edit-square-outline"
          color="white"
          width="22"
        />
      </div>
    </div>
  );
};

export default ContactItem;
