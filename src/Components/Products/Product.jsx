import { Box, Button, Card, Divider, IconButton, Snackbar, SnackbarContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo1 from "../../assests/one.png"
import Logo2 from "../../assests/two.png"
import Logo3 from "../../assests/three.png"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';



const dummyData = [

    {

        id:1,
        img: Logo1,
        name: "product1",
        price: "10"
    },

    {
        id:2,
        img: Logo2,
        name: "product2",
        price: "20"
    },

    {
        id:3,
        img: Logo3,
        name: "product3",
        price: "30"
    },




]
const Product = () => {

    const[cartList,setCartList] = useState([]);

    const [openAlert,setOpenAlert] = useState(false)

    

    const  cartHandler = (product) =>{
        const isExist = cartList.find((cart)=> cart.id === product.id );

        console.log(isExist);
        

        if(!isExist){
            setCartList((prev)=>[...prev,product])
  
        }else{
           setOpenAlert(true)
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    

      useEffect(()=>{

let LocalItem = localStorage.getItem("cartList")
        
        let strCartList  = JSON.stringify(cartList)

        localStorage.setItem("cartList",strCartList)
      },[cartList])



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
    




    return (
        <>


<Snackbar
  anchorOrigin={{ vertical:"top", horizontal:"right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}> 


<SnackbarContent style={{
      backgroundColor:'red',
    }}
    message={


        <>
        
        <span  id="client-snackbar">product already in cart</span> 
        <CloseIcon  style={{marginLeft:"90px"}} onClick={handleClose} fontSize="small" />
        
        </>
    }
  />
      
      </Snackbar>

            <Box className="d-flex justify-content-center gap-5">
                {
                    dummyData?.map((product, index) => {
                        return (
                            <>


                                <Card key={index} className='py-3  px-4 mt-5' sx={{ cursor: "pointer" }}   >

                                    <Box className="text-center">
                                        <img width={140} className='img-fluid' src={product.img} alt={product.name} />
                                        <Typography variant='h5'>{product.name}</Typography>
                                        <Divider sx={{ borderColor: "black" }} />


<Box className="d-flex justify-content-between mt-2">
    
<ShareIcon/>
<FavoriteIcon/>
<ShoppingCartIcon onClick={()=>{
   cartHandler(product);
}}  />
</Box>
                                    </Box>


                                </Card>


                            </>
                        )
                    })
                }

            </Box>
        </>
    )
}

export default Product



