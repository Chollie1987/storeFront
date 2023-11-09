//component showing singular product
import React from 'react'
import data from '../../data.json';
import { Card, CardContent, CardActions, CardMedia, Typography, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import productSlice from '../../store/product';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(productSlice.actions.showProduct(product));
    }
    return (
        <Grid item xs={3}>
        <Card>
                <CardMedia
                    sx={{ height: 220 }}
                    image={`http://source.unsplash.com/random?${product.name}`}
                    title={product.name}
                />
            {/* <CardMedia
                sx={{ height: 200 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={product.name}
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>Select</Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default Product