import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await fetch('http://localhost:5000/api/contacts');
    const data = await response.json();
    setContacts(data);
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6">
      <h1 className="text-4xl font-bold mb-6">Personal Phone Directory</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
