import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const param = useParams();
  const [productsDetails, setProductsDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  console.log(productsDetails, "productsDetails");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const products = await axios.get(`https://fakestoreapi.com/products/${param?.product_id}`);


        if (products.status === 200) {
          setIsLoading(false);
          setProductsDetails(products?.data)
        } else {
          setIsLoading(true)
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (


    <>
 { isLoading ? (
  <Box className="text-center my-5">


<CircularProgress /> 
</Box>
 )  
     : <Grid container spacing={3} className='container mt-5 align-items-center'>

        <Grid item md={6} className='text-center'>
          <img width={"200px"} src={productsDetails?.image} alt="" />
        </Grid>


        <Grid item md={6}>
          <Typography className='' variant='h6'>{productsDetails?.category} </Typography>
          <Typography className='my-3' variant='h4'>{productsDetails?.price} </Typography>
          <Typography className='' variant='h5'>{productsDetails?.title} </Typography>
          <Typography className='my-3' variant='body1'>{productsDetails?.description} </Typography>
          <Typography className='my-3' variant='h6'>{productsDetails?.rating?.rate} </Typography>
    
        </Grid>

      </Grid>}

    </>
  )
}

export default ProductDetails