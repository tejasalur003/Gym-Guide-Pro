import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './styles/App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import BmiCalculator from './pages/BMICalculator';
import Home from './pages/Home';
import Planner from './pages/Planner';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/bmi" element={<BmiCalculator/>} />
      <Route path="/planner" element={<Planner/>} />
    </Routes>
   <Footer />
  </>

);

export default App;
