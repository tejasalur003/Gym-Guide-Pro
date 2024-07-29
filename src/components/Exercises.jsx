import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsLoading(true);
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
      setIsLoading(false);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (isLoading) return <Loader />;
  if (!exercises.length) return <p className="text-center my-12 text-xl">No results found. Please try searching for different keywords.</p>;

  return (
    <div id="exercises" className="mt-12 p-5">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Showing Results</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {exercises.length > exercisesPerPage && (
          <div className="flex space-x-2">
            {[...Array(Math.ceil(exercises.length / exercisesPerPage)).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`px-4 py-2 rounded-full text-white ${currentPage === number + 1 ? 'bg-orange-600' : 'bg-gray-600'}`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
