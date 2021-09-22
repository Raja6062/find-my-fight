
import { BASE_URL } from './constant';
//Main network calling function

export   const Network = async (method, endpoint, body={}, authToken) => {
  return await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token'
      :authToken
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}
