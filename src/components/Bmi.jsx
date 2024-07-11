import React, { useState, useEffect, useRef } from 'react';
import BMIResult from './BmiResult'; // Assuming BMIResult component is properly imported and named
import bmiImg from '../assets/images/bmi2.jpg';

const BMICalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const resultRef = useRef(null);

  const calculateBMI = () => {
    if (height && weight) {
      setLoading(true);
      const heightMeters = height / 100;
      const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
      setTimeout(() => {
        setBMIResult(parseFloat(bmi));
        setLoading(false);
        setShowWarning(false);
        scrollToResult();
      }, 1500);
    } else {
      setBMIResult(null);
      setLoading(false);
      setShowWarning(true);
    }
  };

  const scrollToResult = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col items-center m-10 justify-center bg-white rounded-lg shadow-lg 
        p-10 w-full max-w-3xl h-auto bg-cover bg-center z-10" style={{ backgroundImage: `url(${bmiImg})` }}>
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> {/* Faded overlay */}
          <h2 className="text-4xl font-bold mb-6 relative text-orange-500">BMI Calculator</h2>

          <div className="mb-6 w-full relative z-10">
            <label className="block mb-2 text-white font-semibold">Gender:</label>
            <select
              className="px-4 py-3 border rounded-lg w-full focus:border-black"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Select Gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-6 w-full relative z-10">
            <label className="block mb-2 text-white font-semibold">Age:</label>
            <input
              type="number"
              className="px-4 py-3 border rounded-lg w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
          </div>

          <div className="mb-6 w-full relative z-10">
            <label className="block mb-2 text-white font-semibold">Height (cm):</label>
            <input
              type="number"
              className="px-4 py-3 border rounded-lg w-full"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter Height in cm"
            />
          </div>

          <div className="mb-6 w-full relative z-10">
            <label className="block mb-2 text-white font-semibold">Weight (kg):</label>
            <input
              type="number"
              className="px-4 py-3 border rounded-lg w-full"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter Weight in kg"
            />
          </div>

          {showWarning && (
            <p className="text-red-500 mb-4 relative z-10">Please fill in both height and weight.</p>
          )}

          {loading ? (
            <div className="flex items-center justify-center w-full absolute top-0 left-0 h-full bg-white bg-opacity-75 z-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-full relative z-10"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          )}
        </div>
      </div>

      <div ref={resultRef} className={`transition-opacity duration-500 ${bmiResult !== null ? 'opacity-100' : 'opacity-0'}`}>
        {bmiResult !== null && (
          <BMIResult bmi={bmiResult} height={height} />
        )}
      </div>
    </>
  );
};

export default BMICalculator;
