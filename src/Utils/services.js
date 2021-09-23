import { BASE_URL } from './constant';
import { Network } from './network';
//Write all network functions here

// export const userLogin = async (data) => {
//  return Network('post', 'login', data, null)
// }
export const userRegister = (data) => {
  return Network('POST', 'user/register', data, null);
};
export const userLogin = (data) => {
  return Network('POST', 'user/login', data, null);
};
export const forgetPass = (data) => {
  return Network('POST', 'user/forget', data, null);
};
