
import { Button, ButtonGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem, selectTotalPrice } from '../../Slices/Add Cart/ProductSlice/ProductSlice';


const CartList = (props) => {

  const { open, toggleDrawer } = props;


  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  console.log(items, "items");

const totalPrice = useSelector(selectTotalPrice);
  return (
    <div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box className="position-relative" sx={{height:"100vh"}}>
        <Box
          sx={{ width: 450 }}
          role="presentation">


          <Typography className='mt-2' variant='h4' > Cart Items</Typography>

         { items?.length === 0 ?      ( <Typography className='text-center' variant='h6' >Nothing To Show......</Typography>) :
          items?.map((item) => {
              return <Box class="d-flex justify-content-between align-items-center px-2 mt-3">
                <div>
                  <img width="40px" src={item?.image} alt="" />
                  <span> {item?.title?.length > 18 ? `${item?.title.slice(0, 15)}...` : item.title}</span>
                </div>
                <ButtonGroup size="small" variant="text" aria-label="Basic button group">
                  <Button>
                    <RemoveIcon  onClick={()=> dispatch(decreaseQuantity(item))} />
                    </Button>
                  <Button>{item?.quantity}</Button>
                  <Button>
                    <AddIcon onClick={()=> dispatch(increaseQuantity(item))} />
                  </Button>
                </ButtonGroup>
                <span>{item?.price}</span>
                <Button> 
                  <DeleteIcon onClick={()=> dispatch(removeItem(item))}/> 

                  </Button>
              </Box>

            })
          }
         
        </Box>
        <Box sx={{bgcolor:"#1976D2"}} className="position-absolute bottom-0 d-flex justify-content-evenly p-3  text-white   w-100">
           <Typography variant='body1'>Total Price</Typography>
           <Typography variant='body1'>${totalPrice.toFixed(2)} </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}


export default CartList;
