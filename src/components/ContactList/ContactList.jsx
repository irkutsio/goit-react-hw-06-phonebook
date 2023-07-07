import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);


  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact name={name} number={number} id={id} key={id}/>;
      })}
    </ul>
  );
};
