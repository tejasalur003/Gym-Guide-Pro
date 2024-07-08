import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-20 lg:mt-32 px-5 lg:px-20">
    {/* Target Muscle Exercises */}
    <div className="mb-10">
      <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
        Similar <span className="text-red-500 capitalize">Target Muscle</span> Exercises
      </h2>
      <div className="relative">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>

    {/* Equipment Exercises */}
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
        Similar <span className="text-red-500 capitalize">Equipment</span> Exercises
      </h2>
      <div className="relative m-10">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  </div>
);

export default SimilarExercises;
