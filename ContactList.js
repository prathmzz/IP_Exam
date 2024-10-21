import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="border-b py-2">
            <span className="font-semibold">{contact.name}</span>: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
