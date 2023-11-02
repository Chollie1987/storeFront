import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Categories from '../Categories/categories'
const Header = () => {
    return <AppBar position="static" style={ {padding: '10px'}}>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                My Store
            </Typography>
            <Categories/>
        </Toolbar>
    </AppBar>

}

export default Header