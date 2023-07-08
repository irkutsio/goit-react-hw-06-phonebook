import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterInput } from './FilterInput/FilterInput';

export const App = () => {
  // const [filter, setFilter] = useState('');

  // const [contacts, setContacts] = useState(() => {
  //   const localStorageValue = JSON.parse(localStorage.getItem(CONTACT_LS_KEY));
  //   if (localStorageValue !== null) {
  //     return localStorageValue;
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem(CONTACT_LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const getUserContact = contact => {
  //   const existingContact = contacts.find(
  //     user => user.name.toLowerCase() === contact.name.toLowerCase()
  //   );
  //   if (existingContact) {
  //     alert('Contact with the same name already exists!');
  //     return;
  //   }
  //   contact.id = nanoid();
  //   setContacts([...contacts, contact]);
  // };

  // const handleFilterChange = filter => {
  //   setFilter(filter);
  // };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  // const filteredContacts =  contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div style={{ padding: '36px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterInput />
      <ContactList />
    </div>
  );
};
