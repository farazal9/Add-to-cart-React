
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';




const CartList =(props) => {

    const {open,toggleDrawer}=props

    const [cartItems,setcartItems] =useState([])
    console.log(cartItems);
    

useEffect(()=>{
  const cartItemsArr =  localStorage.getItem("cartList")
const parseCartItemsArr = JSON.parse(cartItemsArr)





  setcartItems(parseCartItemsArr);
  
},[])





  return (
    <div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box 
      sx={{ width: 250 }}
       role="presentation" onClick={toggleDrawer(false)}>


        <Typography variant='h4' > Cart Items</Typography>
      
    {
      cartItems?.map((item)=>{
        return<Box>
          <img width="70px" src={item.img} alt="" />
          <span>{item.name}</span>
          <span>{item.price}</span>
          </Box>
    
      })
    }
      </Box>
      </Drawer>
    </div>
  );
}


export default CartList;
