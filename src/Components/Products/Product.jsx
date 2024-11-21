import { Box, Button, Card, Container, Divider, Grid, IconButton, Snackbar, SnackbarContent, TextField, Tooltip, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Slices/Add Cart/ProductSlice/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';





const Product = () => {

  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [categoryOptions, setCategoryOptions] = useState([])
  const [categoryFilter, setCategoryFilter] = useState({})

  const navigate = useNavigate();

  const { IsToast} = useSelector(state => state.products)
  const dispatch = useDispatch()

  const options = ['Mens Cotton Jacket', 'Mens Casual', 'DANVOUY Womens'];


  console.log( IsToast, "toast");


  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);

    console.log(isExist);


    if (!isExist) {
      setCartList((prev) => [...prev, product])

    } else {
      setOpenAlert(true)
    }

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const searchHandler = (e) => {
    const filteredArr = products?.filter((product) => product?.name === e?.target.value)

  }



  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const products = await axios.get("https://fakestoreapi.com/products");


        if (products.status === 200) {
          setIsLoading(false);
          setProducts(products?.data)
          setAllProducts(products?.data)

          const filterCategories = products?.data?.map((product) => {
            return {
              label: product.category,
              value: product.category,

            };
          });


          const uniqueCategories = filterCategories.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.value === item.value)
          );

          setCategoryOptions(uniqueCategories)


        } else {
          setIsLoading(true)
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {

    let filterProducts = allProducts?.filter((product) => product?.category === categoryFilter?.value)
    setProducts(filterProducts)
    console.log(filterProducts, "filterProducts");

  }, [categoryFilter])


  useEffect(()=>{
    if( IsToast){
      toast("product already added")
    }
  },[ IsToast])
  return (
    <>
      
      <ToastContainer />

      <Box className="d-flex justify-content-between container mt-5 px-5">


        <TextField onChange={searchHandler} size='small' placeholder='Search Items...' />


        <Autocomplete
          onChange={(e, newValue) => {
            setCategoryFilter(newValue);
          }}
          size='small'
          disablePortal
          options={categoryOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Categories" />}
        />
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}>


        <SnackbarContent style={{
          backgroundColor: 'red',
        }}
          message={


            <>

              <span id="client-snackbar">product already in cart</span>
              <CloseIcon style={{ marginLeft: "90px" }} onClick={handleClose} fontSize="small" />

            </>
          }
        />

      </Snackbar>
      <Container>
        {isLoading ? (

          <Box className="text-center my-5">


            <CircularProgress />
          </Box>
        )
          : <Grid container spacing={4} justifyContent="center">
            {products?.map((product, index) => (
             
              <Grid item key={index} xs={12} md={3} >
                <Card className="py-3 px-4 mt-5" sx={{ cursor: "pointer" }}>
                  <Box className="text-center">
                    <img
                      style={{ maxHeight: "150px", minHeight: "150px" }}
                      width={100}
                      className="img-fluid"
                      src={product?.image}
                      alt={product.name}
                    />
                    <Tooltip placement="top" title={product?.title}>
                      <Typography variant="h6">
                        {product?.title?.length > 18 ? `${product?.title.slice(0, 15)}...` : product.title}
                      </Typography>
                    </Tooltip>
                    <Divider sx={{ borderColor: "black" }} />
                    <Box className="d-flex justify-content-between mt-2">
                      <Tooltip title="Product Details">
                        <VisibilityIcon onClick={() => {
                          navigate(`/product-details/${product?.id}`);
                          console.log(product);


                        }} />
                      </Tooltip>


                      <Tooltip title="Add to Favorite">
                        <FavoriteIcon />
                      </Tooltip>


                      <Tooltip title="Add to Cart">

                        <ShoppingCartIcon onClick={() => dispatch(addProduct(product))} />

                      </Tooltip>

                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}

          </Grid>}
      </Container>


    </>
  )
}

export default Product



