import { Box, Button, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react";
import ImgLogo from "../../../../assests/signup-g.svg";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import useSignup from "./useSignup";


const Signup = () => {
 const {showPassword,setShowPassword,control,handleSubmit,errors,signUpHandler}= useSignup()
  return (
    <div className="m-3">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className="text-center">
          <img className="img-fluid" src={ImgLogo} alt="a" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} className="">
          <Box>
            <Typography variant="h4">Get Start Shopping</Typography>
            <Typography variant="p">Welcome to FreshCart! Enter your email to get started.

            </Typography>


            <form onSubmit={handleSubmit(signUpHandler) }>



              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) =>
                      <TextField fullWidth placeholder="First Name" size="small" {...field} />}
                  />
                 <p className="text-danger">{errors?.firstName?.message}</p>
                </Grid>
                <Grid item xs={12} md={6}>
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) =>
                      <TextField fullWidth placeholder=" lastName" size="small" {...field} />}

                  />
                </Grid>

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
                  <Button type="submit" fullWidth variant="contained">Register</Button>
                </Grid>



              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;


