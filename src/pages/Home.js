import React, {useState} from 'react';
import { Box } from '@mui/material';
import { Padding, Search } from '@mui/icons-material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box  >

        <HeroBanner  />

        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        <Footer></Footer>
    </Box>
  )
}

export default Home