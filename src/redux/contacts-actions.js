import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const findContact = value => ({
  type: types.FIND,
  payload: value,
});

export default { addContact, deleteContact, findContact };
