import React from 'react'
import {Link} from 'react-router-dom'
import { Stack } from '@mui/material'
// It manages the layout of child basically helps to make menu

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Link to="/">
            <img src="/assets/images/Logo.png" alt="Logo" className="navbar-logo" style={{width:'48px', height:'48px',margin:'0 20px'}}/>
        </Link>
        <Stack direction='row' gap="40px" fontSize='24px' alignItems=" flex-end">
           <Link to="/" className="navbar-link" style={{textDecoration:'none'}}>Home</Link>
           <a href="#exercises" className="navbar-link" style={{textDecoration:'none'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar