import React from 'react'
import { Card, CardContent, CardMedia, Modal, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import productSlice from '../../store/product';
// import cartSlice from '../../store/cart';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CartModal = ({open, handleClose}) => {
    const cart = useSelector(state => state.cart.cart);
    console.log(cart)
  return (
      <Modal
          open={open} onClose={handleClose}>
          <Card style= {style}>
            
              {/* <CardMedia
                  sx={{ height: 200 }}
                
              /> */}
              <CardContent> Cart Items:
                {cart.map(item => (
                    <Typography gutterBottom variant="h6">
                       {item?.name}
                    </Typography> 
                ))}
              </CardContent> 
          </Card>
      </Modal>
  )
}

export default CartModal