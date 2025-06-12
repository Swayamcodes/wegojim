import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import Logo from '../assets/images/Logo-2.png'

const Navbar = () => {
  return (
    <Stack
    
    direction="row"
    justifyContent="space-around"
    sx={{gap:{
        sm:'122px', xs: '40px'
    }, mt:{ sm:'12px' ,xs:'20px'}, mb:'10px', justifyContent: 'none' }} px="20px">
        <Link to="/" >
        <img src={Logo} alt='logo' style={{width: '48px', height: '48px', margin:'0 20px'}} />
        </Link> 
        <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
            <Link to="/" style={{textDecoration: 'none', color:'#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
           
            <a href="#exercises" style={{textDecoration: 'none', color:'#3A1212'}}>Exercises</a>
            
<Button
  component={Link}
  to="/generate-plan"
  variant="contained"
  sx={{
    background: "linear-gradient(90deg, #00bfff, #ff4c68, #ef8172)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    textTransform: "none",
    boxShadow: "0 4px 20px rgba(255, 76, 104, 0.4)",
    paddingX: "16px",
    paddingY: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 6px 25px rgba(255, 76, 104, 0.6)",
      transform: "scale(1.05)",
    },
  }}
>
   AI Workout
</Button>

        </Stack>
    </Stack>
   
  )
}

export default Navbar