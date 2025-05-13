import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search.trim()) {
      const trimmedSearch = search.trim().toLowerCase();
      console.log('Search Query:', trimmedSearch);

      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=10000',
          exerciseOptions
        );

        console.log('Fetched Exercises:', exercisesData);

        const searchedExercises = exercisesData.filter((item) =>
          item.name.toLowerCase().includes(trimmedSearch) ||
          item.target.toLowerCase().includes(trimmedSearch) ||
          item.equipment.toLowerCase().includes(trimmedSearch) ||
          item.bodyPart.toLowerCase().includes(trimmedSearch)
        );

        if (searchedExercises.length === 0) {
          console.log('No exercises found for this query.');
        }

        setExercises(searchedExercises);
        setSearch('');
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
