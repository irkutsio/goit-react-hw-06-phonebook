const { nanoid } = require('nanoid');

export const createContact = contact => {
  return {
    type: 'contacts/createContact',
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'contacts/setFilter',
    payload: value,
  };
};
