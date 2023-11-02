import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.product.categories)
    // const [Categories, setCategories] = useState('categories');
    const handleChange = (e) => {
        dispatch(productSlice.actions.setCategory(e.target.value))
        // setCategories(e.target.value);
    }
    return ( 
        <div style={{width: '150px'}}>
        <FormControl fullWidth>
        <InputLabel id="Categories">Categories</InputLabel>
        <Select
            labelId="Categories"
            id="category"
            value={Categories}
            label="Categories"
            onChange={handleChange}
        >
            <MenuItem value={1}>Electronics</MenuItem>
            <MenuItem value={2}>Food</MenuItem>
             <MenuItem value={3}>Clothing</MenuItem>
        </Select>
    </FormControl>
        </div>
    );
};

export default Categories;