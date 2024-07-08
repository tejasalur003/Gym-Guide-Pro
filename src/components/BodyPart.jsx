import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    className={`flex flex-col items-center justify-center border border-gray-300 ${bodyPart === item ? 'border-y-4 border-orange-600 transform scale-105' : 'hover:scale-105'} bg-white rounded-lg shadow-md w-64 h-72 cursor-pointer mb-4 transition-transform`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10 mt-4" />
    <h2 className={`text-xl font-semibold text-gray-800 capitalize my-2 ${bodyPart === item ? 'text-orange-600' : 'text-gray-800'}`}>{item}</h2>
  </div>
);

export default BodyPart;
