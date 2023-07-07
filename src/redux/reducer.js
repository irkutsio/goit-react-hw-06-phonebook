const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/createContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'contacts/setFilter': {
      console.log(action.payload);
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload)
        ),
      };
    }
    default:
      return state;
  }
};

// import { combineReducers } from 'redux';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/createContact': {
//       return [...state, action.payload];
//     }
//     case 'contacts/deleteContact': {
//       return state.filter(contact => contact.id !== action.payload);
//     }
//     default:
//       return state;
//   }
// };

// const filterInitialState = {
//   filter: '',
// };

// const filterReducer = (state = filterInitialState, action) => {
//   return state;
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
