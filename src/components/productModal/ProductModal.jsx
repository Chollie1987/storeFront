import React from 'react';
// import ProductModal from '../../components/productModal';
import { Card, CardContent, CardMedia, Modal, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/product';
import cartSlice from '../../store/cart';
// import Product from '../Product/Product';


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

const ProductModal = () => {
    const product = useSelector((state) => state.product.selectedProduct);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(productSlice.actions.showProduct(undefined));
    }
    const handleAddToCart = () => {
        dispatch(cartSlice.actions.setAddToCart(product))
    }
    return (
        <Modal
            open={product !== undefined} onClose ={handleClose}>
            <Card style={style}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title={product?.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product?.price}
                    </Typography>
                    <Button onClick={handleAddToCart} variant="text">Add to Cart</Button>
                </CardContent>
            </Card>
        </Modal>
    )
}

export default ProductModal
