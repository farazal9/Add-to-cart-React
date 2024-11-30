import React, { useState } from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useSignup = () => {
    const [showPassword, setShowPassword] = useState(false);


const schema = yup
.object({
  firstName: yup
  .string()
  .min(3)
  .max(10)
  .required("First name is required"),
  email: yup
  .string().
  required("email is required"),


  Password: yup
  .string()
  .required("Password is required")
  .min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),

});



const signupvalues = {
  firstName: "",
    lastName: "",
    email:"",
    Password:""
}


const { control, handleSubmit,reset ,formState: { errors } }  = useForm({
  defaultValues:signupvalues,
  resolver: yupResolver(schema)

});


const signUpHandler =(data)=>{
console.log(data);
reset();
};


  return {showPassword,setShowPassword,control,handleSubmit,errors,signUpHandler}
}

export default useSignup