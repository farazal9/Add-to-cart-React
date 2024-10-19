
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';




const CartList =(props) => {

    const {open,toggleDrawer}=props

    const [cartItems,setcartItems] =useState([])
    console.log(cartItems);
    

useEffect(()=>{
  const cartItemsArr =  localStorage.getItem("cartList")
  setcartItems(cartItemsArr);
  
},[])



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
    
    </Box>
  );

  return (
    <div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


export default CartList;
