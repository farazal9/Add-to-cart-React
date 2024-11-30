import React, { useState } from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
const useSignin = () => {
    const [showPassword, setShowPassword] = useState(false);


    const schema = yup
    .object({
      
      email: yup
      .string().
      required("email is required"),
  
  
      Password: yup
      .string()
      .required("Password is required")
    
    });
  
  
  
    const signInvalues = {
        email:"",
        Password:""
    }
  
  
  
  
  
    const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues:signInvalues,
      resolver: yupResolver(schema)
    })
  
  
    const signInHandler = (data) => {
        console.log(data, "Form Data");
    };




  return {showPassword,setShowPassword,control,handleSubmit,errors,signInHandler}
}

export default useSignin