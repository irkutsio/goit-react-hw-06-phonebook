import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fields } from './ContactForm.styled';

export const ContactForm = ({getUserContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };


   const handleSubmit = e => {
      e.preventDefault();
      
      getUserContact({
        name: name,
        number: number,
      });
      setName('');
      setNumber('');
    };


  return (
    <form
    onSubmit={handleSubmit}
    >
      <Fields>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit">Add Contact</button>
      </Fields>
    </form>
  );
};

ContactForm.propTypes = {
  getUserContact: PropTypes.func.isRequired,
};