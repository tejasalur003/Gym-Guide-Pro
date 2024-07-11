import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Plan = () => {
  const [gender, setGender] = useState('');
  const [unit, setUnit] = useState('lbs');
  const [bodyweight, setBodyweight] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [workoutDays, setWorkoutDays] = useState(3);
  const [equipment, setEquipment] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission attempt
  const [showWarning, setShowWarning] = useState(false); // State to control warning message
  const navigate = useNavigate();

  // Function to handle form validation
  const validateForm = useCallback(() => {
    if (fitnessLevel && fitnessGoal && workoutDays && equipment) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [fitnessLevel, fitnessGoal, workoutDays, equipment]); // useCallback dependencies

  // Handle form validation on every state change
  useEffect(() => {
    validateForm();
  }, [validateForm]); // useEffect dependency

  const handleGenerateWorkout = () => {
    setIsSubmitted(true); // Mark form submission attempt

    // Check if form is valid before navigating or showing warning
    if (isFormValid) {
      const workoutData = {
        gender,
        unit,
        bodyweight,
        fitnessLevel,
        fitnessGoal,
        workoutDays,
        equipment,
      };
      navigate('/workout-split', { state: workoutData });
    } else {
      setShowWarning(true); // Display warning message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-600 p-6">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Get started</h1>
        <p className="mb-6">Tell us about yourself to create your first custom workout</p>

        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Unit of Measurement</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="unit"
                value="lbs"
                checked={unit === 'lbs'}
                onChange={(e) => setUnit(e.target.value)}
                className="mr-2"
              />
              Lbs
            </label>
            <label>
              <input
                type="radio"
                name="unit"
                value="kgs"
                checked={unit === 'kgs'}
                onChange={(e) => setUnit(e.target.value)}
                className="mr-2"
              />
              Kgs
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Bodyweight</label>
          <input
            type="number"
            value={bodyweight}
            onChange={(e) => setBodyweight(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Fitness Level</label>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
          >
            <option value="">Select your fitness level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Fitness Goal</label>
          <select
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
          >
            <option value="">Select your fitness goal</option>
            <option value="lose weight">Lose weight</option>
            <option value="build muscle">Build muscle</option>
            <option value="improve endurance">Improve endurance</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">How many days can you workout per week?</label>
          <input
            type="range"
            min="1"
            max="6"
            value={workoutDays}
            onChange={(e) => setWorkoutDays(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">{workoutDays} days</div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Equipment</label>
          <select
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
          >
            <option value="">Select equipment</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="functional">Functional</option>
            <option value="bodyweight">Bodyweight</option>
          </select>
        </div>

        {/* Always show the button */}
        <button
          onClick={handleGenerateWorkout}
          className="w-full p-4 bg-orange-700 hover:bg-orange-800 rounded-lg font-bold"
        >
          GENERATE YOUR WORKOUT
        </button>

        {/* Show warning message if form is submitted but not valid */}
        {showWarning && (
          <p className="text-red-500 mt-2">Please fill out all required fields to generate your workout.</p>
        )}
      </div>
    </div>
  );
};

export default Plan;
