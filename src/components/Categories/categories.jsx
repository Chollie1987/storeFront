import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import categorySlice from '../../store/category';

const Categories = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(state => state.category.selectedCategory)
    const categories = useSelector(state => state.category.categories)
    // console.log(categories)
    // const [Categories, setCategories] = useState('categories');
    const handleChange = (e) => {
        dispatch(categorySlice.actions.setCategory(e.target.value))
        // setCategories(e.target.value);
    }
    return ( 
        <div style={{width: '150px', paddingLeft: '30px'}}>
        <FormControl fullWidth>
        <InputLabel id="Categories">Categories</InputLabel>
        <Select
            labelId="Categories"
            id="category"
            value={selectedCategory}
            label="Categories"
            onChange={handleChange}
        >
                    {categories.map(category => (<MenuItem key={category._id} value={category.name}>{category.name}</MenuItem>))}
        </Select>
    </FormControl>
        </div>
    );
};

export default Categories;