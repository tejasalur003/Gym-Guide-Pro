import React from 'react';

const BMIResult = ({ bmi, height }) => {
  const bmiCategories = [
    { key: 'Body Mass Index (BMI)', value: `${bmi.toFixed(1)} kg/m²` },
    { key: 'BMI Category', value: calculateBMICategory(bmi) },
    { key: 'Healthy BMI range', value:"18.5 - 25 kg/m2" },
    { key: 'Healthy weight for the height', value: calculateIdealWeight(height) }
  ];

  // Function to calculate BMI category based on BMI value
  function calculateBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Healthy weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }



  // Function to calculate ideal weight range based on height
  function calculateIdealWeight(height) {
    // Convert height from cm to meters
    const heightMeters = height / 100;
  
    // Define the lower and upper bounds of the ideal BMI range
    const lowerBMI = 20;
    const upperBMI = 23;
  
    // Calculate ideal weight range based on lower and upper BMI bounds
    const lowerWeight = lowerBMI * (heightMeters ** 2);
    const upperWeight = upperBMI * (heightMeters ** 2);
  
    // Return ideal weight range rounded to one decimal place
    return `${lowerWeight.toFixed(1)} - ${upperWeight.toFixed(1)} kg`;
  }

  return (
    <div className='bg-gray-200 p-5'>
    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Result</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <tbody>
            {bmiCategories.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 font-semibold">{item.key}</td>
                <td className="p-4">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default BMIResult;
