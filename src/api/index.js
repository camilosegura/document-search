import axios from 'axios';

export function getDocuments(search = '') {
  return axios.get(`http://localhost:4000/medical?search=${search}`);
}
