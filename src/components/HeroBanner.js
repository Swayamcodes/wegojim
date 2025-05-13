import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/gym_man.jpg'

const HeroBanner = () => (
  <Box sx={{ pt: { lg: '222px', xs: '70px' }, pl: { sm: '70px' },  }} position="relative" p="20px"  className="gradient-background" >
    <Typography color="#b52121" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#ff2625', padding:'10px'}}>Explore Exercises</Button>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    <Typography fontWeight={600} color="#942b2b" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>

  </Box>
);

export default HeroBanner;