import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card bg-orange-500 rounded-lg shadow-lg overflow-hidden flex flex-col items-start" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="w-full" />
    <div className="flex mx-2 mt-2 ">
      <button className="bg-orange-600 text-white text-xs lg:text-sm px-3 py-1 rounded-full mr-2 uppercase">
        {exercise.bodyPart}
      </button>
      <button className="bg-yellow-500 text-white text-xs lg:text-sm px-3 py-1 rounded-full uppercase">
        {exercise.target}
      </button>
    </div>
    <p className="text-black font-bold text-lg lg:text-xl ml-5 my-2 capitalize">{exercise.name}</p>
  </Link>
);

export default ExerciseCard;
