
import { Button, ButtonGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../Slices/Add Cart/ProductSlice/ProductSlice';


const CartList = (props) => {

  const { open, toggleDrawer } = props;


  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  console.log(items, "items");


  return (
    <div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 450 }}
          role="presentation">


          <Typography variant='h4' > Cart Items</Typography>

          {
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
              </Box>

            })
          }
        </Box>
      </Drawer>
    </div>
  );
}


export default CartList;
