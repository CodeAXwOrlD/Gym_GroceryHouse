import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const [Exercise, setExercise] = useState([])
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercise={setExercise} Exercises={Exercise} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home