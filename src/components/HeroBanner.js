import React from 'react'
import '../App.css'
import {Box, Stack, Typography} from '@mui/material'
// Typography is just like a p or heading tag with extra styling
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <div className="cente">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} className="hero-banner-exercise-text" sx={{ display: { lg: 'block', xs: 'none' } }}>
      EXERCISE
    </Typography>
    </div>
    <img src="/assets/images/banner.png" alt="hero-banner" className="hero-banner-img" style={{ width: '550px', height: '650px', top: '80px', right: '20px', opacity: 0.7 }} />
  </Box>

  )
}

export default HeroBanner
