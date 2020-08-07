import axios from 'axios';
import Globals from '../Utils/Globals';

const restApi = axios.create({
  baseURL: Globals.BASE_URL,
});
export const doGet = (url) => {
  return new Promise((resolve, reject) => {
    restApi
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject('Api Call failed');
        }
      })
      .catch((error) => {
        var errorResponse = error.response;
        reject(errorResponse);
      });
  });
};
