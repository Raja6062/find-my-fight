import axios from 'axios';
import { BASE_URL } from './constant';

//THIS CODE IS FOR DEBUGGIN NETWORK CALLES IN CHROME DEVTOOLS
//REMOVE THIS ON PRODUCTION BUILD
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

//Main method for network calls using axios
export const Network = (method, endpoint, data = {}, headers) => {
  return new Promise((resolve, reject) => {
    if (method == 'GET') {
      axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        headers: {
          'Content-Type': headers || 'application/json',
          Authorization: `Bearer ${data.token}`,
          'Access-Control-Allow-Origin' : '*',
          crossorigin:true



        },
      }).then((res) => {
        resolve(res.data);
      });
    } else {
      axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers: {
          Accept: 'application/json',
          'Content-Type': headers || 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      }).then((res) => {
        resolve(res.data);
      });
    }
  });
};
