import * as yup from "yup";

export const validationsLoginForm = {
  firstFieldName: yup.string().email('Must be a valid email').required("Enter a valid Email"),
  secondFieldName:yup.string().min(6, 'Password must be atleast 6 character' ).required("Password required")
};

export const validationsCreateForm  = {
  firstFieldName: yup.string().email('Must be a valid email').required("Enter a valid email"),
  secondFieldName:yup.string().min(6,'Password must be atleast 6 character').required("Required"),
  confirmPassword: yup.string()
      .required("Required")
      .oneOf([yup.ref('secondFieldName')], 'Password must match'),
};

export const validationsRedeemForm = {
  firstFieldName: yup.number('Please enter valid number').min(16, 'at least 16 digits are required').required("Card number required"),
  secondFieldName:yup.number('Please enter valid number').min(4, 'only 4 digits allowed').required("PIN required")
};

export const validationsForm = {
  denomination: yup.number('Please enter valid number').required("Required"),
  quantity: yup.number('Please enter valid number').required("Required"),
  firstName: yup
  .string()
  .required("Name is required"),
email: yup.string().email().required("Enter a valid email"),
message:yup.string().required("Add some message text")
};

export const validationCard= {
   cardnumber:yup.number().min(16,'at least 16 digits are required').required('Enter credit card number'),
   name:yup.string().min(4, 'at least 4 character required').required('Name required'),
   date:yup.date().required('Date required'),
   cvv:yup.number().min(3).required('Required')
};


