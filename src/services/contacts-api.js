import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5555';

async function getContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

async function postContact(name, number) {
  const contact = await axios.post('/contacts', {
    name,
    number,
  });
  console.log(contact);
  return contact.data;
}

async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return;
}

export { getContacts, postContact, deleteContact };
