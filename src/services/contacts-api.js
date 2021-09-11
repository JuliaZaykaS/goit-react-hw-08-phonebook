import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5555';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// const getTokenForAxios = (token) => {
//   return axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const tokenForFetch = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

async function getContacts(token) {
  tokenForFetch.set(token);
  // const response = await axios.get('/contacts');
  const response = await axios.get('/contacts');
  return response.data;
}

async function postContact(token, name, number) {
   tokenForFetch.set(token);
  const contact = await axios.post('/contacts', {
    name,
    number,
  });
  console.log(contact);
  return contact.data;
}

async function deleteContact(token, id) {
   tokenForFetch.set(token);
  await axios.delete(`/contacts/${id}`);
  return;
}

export { getContacts, postContact, deleteContact, tokenForFetch };
