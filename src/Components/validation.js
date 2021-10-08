import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
  //   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  email: Yup.string().email('Please enter valid email').required('Please enter email'),
  password: Yup.string().required('Password is required'),
});
export const ForgotSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Please enter email'),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter firstname'),
  lastName: Yup.string().required('Please enter lastname'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  email: Yup.string().email('Please enter valid email').required('Please enter email'),
  userName: Yup.string().min(3, 'User Name must be at least 3 characters').required('User Name is required'),
  // memberType: Yup.string().required('Member type is required '),
  confirmPassword: Yup.string()
    .required('Please re-enter password')
    .oneOf([Yup.ref('password'), null], 'Password does not match'),
  //  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});
export const editProfileSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Please enter email'),
  name: Yup.string().required('Please enter name'),
  userName: Yup.string().required('Please enter username'),
  description: Yup.string().required('Please enter description'),
  // familyLife: Yup.string().required('Please enter familyname'),
  // idea: Yup.string().required('Please enter idea'),
  // career: Yup.string().required('Please enter career'),
  // future: Yup.string().required('Please enter future'),
});
