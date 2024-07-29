import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { formFields } from "../constants/content";

const Plan = () => {
  const [formData, setFormData] = useState({
    gender: '',
    unit: 'lbs',
    bodyweight: '',
    fitnessLevel: '',
    fitnessGoal: '',
    workoutDays: 3,
    equipment: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? value : prevData[name],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = useCallback(() => {
    const { fitnessLevel, fitnessGoal, workoutDays, equipment } = formData;
    setIsFormValid(fitnessLevel && fitnessGoal && workoutDays && equipment);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleGenerateWorkout = () => {
    if (isFormValid) {
      navigate('/workout-split', { state: formData });
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-orange-600 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 shadow-md">Let's Build Your Perfect Workout Plan!</h1>
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6">Get Started</h2>
        <p className="mb-6">Tell us about yourself to create your first custom workout</p>

        {Object.entries(formFields).map(([key, field]) => {
          switch (field.type) {
            case 'radio':
              return (
                <div key={key} className="mb-4">
                  <label className="block mb-2 font-semibold">{field.label}</label>
                  <div className="flex items-center">
                    {field.options.map((option) => (
                      <label key={option.value} className="mr-4 flex items-center">
                        <input
                          type="radio"
                          name={key}
                          value={option.value}
                          checked={formData[key] === option.value}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            case 'select':
              return (
                <div key={key} className="mb-4">
                  <label className="block mb-2 font-semibold">{field.label}</label>
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg text-black"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'range':
              return (
                <div key={key} className="mb-4">
                  <label className="block mb-2 font-semibold">{field.label}</label>
                  <input
                    type="range"
                    name={key}
                    min={field.min}
                    max={field.max}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full"
                  />
                  <div className="text-center mt-2">{formData[key]} days</div>
                </div>
              );
            case 'number':
              return (
                <div key={key} className="mb-4">
                  <label className="block mb-2 font-semibold">{field.label}</label>
                  <input
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg text-black"
                  />
                </div>
              );
            default:
              return null;
          }
        })}

        <button
          onClick={handleGenerateWorkout}
          className="w-full p-4 bg-orange-800 hover:bg-orange-600 rounded-lg font-bold transition-all duration-300"
        >
          GENERATE YOUR WORKOUT
        </button>

        {showWarning && (
          <p className="text-red-500 mt-2">Please fill out all required fields to generate your workout.</p>
        )}
      </div>
    </div>
  );
};

export default Plan;
