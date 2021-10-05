import { BASE_URL } from './constant';
import { Network } from './network';
//Write all network functions here

// export const userLogin = async (data) => {
//  return Network('post', 'login', data, )
// }
export const userRegister = (data) => {
  return Network('POST', 'user/register', data);
};
export const userLogin = (data) => {
  return Network('POST', 'user/login', data);
};
export const forgetPass = (data) => {
  return Network('POST', 'user/forget', data);
};
export const userProfile = (data) => {
  return Network('GET', 'user/profile', data);
};
