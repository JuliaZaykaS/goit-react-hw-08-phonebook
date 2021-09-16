import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5555';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
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

// const tokenForContact = state.auth.token;

// async function getContacts(token) {
// async function getContacts() {
//   // const response = await axios.get('/contacts');
//   // const response = await axios.get('/contacts');
//   const contact = await axios.get('/contacts');
//   // tokenForFetch.set(response.data.token);
//   // tokenForFetch.set(contact.data.token);
//   // return response.data;
//   return contact.data;
// }

// async function postContact(token, name, number) {
// async function postContact( name, number) {
//   const contact = await axios.post('/contacts', {
//     name,
//     number,
//   });
//   // console.log(contact);
//   // tokenForFetch.set(contact.data.token);
//   return contact.data;
// }

// async function deleteContact(token, id) {
// async function deleteContact(id) {
//   // await axios.delete(`/contacts/${id}`);
//   const contact = await axios.delete(`/contacts/${id}`);
//   // tokenForFetch.set(contact.data.token);
//   return;
// }

// export { getContacts, postContact, deleteContact, tokenForFetch };
export { tokenForFetch };
