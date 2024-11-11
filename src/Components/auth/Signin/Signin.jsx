import { Box, Grid, IconButton,Button, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from "../../../assests/signup-g.svg"
import { Controller, useForm } from 'react-hook-form'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";







const Signin = () => {

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
  
  });



  const signInvalues = {
      email:"",
      Password:""
  }





  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues:signInvalues,
    resolver: yupResolver(schema)
  })



  const signInHandler = (e,data)=>{
e.preventDefault();
  }
  return (
    <div>



      <Grid container>

        <Grid item xs={12} md={6} className='text-center'>
          <img className='img-fluid' src={Logo} alt="" />
        </Grid>

        <Grid item xs={12} md={6} className='p-5'>
          <Box>
            <Typography variant="h4">Sign in to FreshCart</Typography>
            <Typography variant="p">Welcome back to FreshCart! Enter your email to get started.</Typography>




            <form onSubmit={handleSubmit(signInHandler)} >

              <Grid container spacing={3}>

                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) =>
                      <TextField fullWidth placeholder="Email" size="small" {...field} />}

                  />
                  <p className="text-danger">{errors?.email?.message}</p>
                </Grid>

                <Grid item xs={12}>

                  <Controller
                    name="Password"
                    control={control}
                    render={({ field }) =>
                      <OutlinedInput fullWidth
                        {...field}
                        size="small"
                        id="outlined-adornment-weight"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label={
                              showPassword ? 'hide the password' : 'display the password'
                            }


                              edge="end"
                              onClick={() => { setShowPassword(!showPassword) }}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}

                            </IconButton >

                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',
                        }}




                      />

                    }

                  />

                  <p className="text-danger">{errors?.Password?.message}</p>

                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained">Sign in</Button>
                </Grid>



              </Grid>
            </form>

          </Box>
        </Grid>
      </Grid>

    </div>
  )
}

export default Signin