import { BASE_URL } from './constant';
//Main network calling function

export const Network = async (method, endpoint, body = {}) => {
  return await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${body.token}`,
      // 'x-access-token'
      // :authToken
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => console.log('res', res))
    .catch((error) => console.log(error));
};
