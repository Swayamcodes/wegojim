import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeneratePlan from "./pages/GeneratePlan";


const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1536px'}}} m="auto"    > 
    <Navbar /> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/generate-plan" element={<GeneratePlan />} />
    </Routes>
    </Box>
  )
}

export default App;