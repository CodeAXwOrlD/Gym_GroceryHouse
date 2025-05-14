import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      Made ❤️ by <span style={{color:'#ff2625', textDecoration:'none'}}>CodeAXWorlD</span>
    </Typography>
  </Box>
);

export default Footer;