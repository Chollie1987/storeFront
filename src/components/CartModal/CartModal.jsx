import React from 'react'
import { Card, CardContent, Modal, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
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

const contentStyle = {
    fontFamily: 'Libre Baskerville'
}
const CartModal = ({ open, handleClose }) => {
    const cart = useSelector(state => state.cart.cart);
    console.log(cart)
    return (
        <Modal
            open={open} onClose={handleClose}>
            <Card style={style}>
                <CardContent style={contentStyle}>
                    {cart.map(item => (
                        <Typography key={item?.name} gutterBottom variant="h6"> 
                        Cart Items:
                        <br/>
                       {item?.name}
                    </Typography> 
                    ))}
                    <Button>Checkout</Button>
                </CardContent>
            </Card>
        </Modal>
    )
}

export default CartModal