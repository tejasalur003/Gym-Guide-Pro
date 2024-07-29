import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      //console.log(bodyPartsData);
      setBodyParts(['all', ...bodyPartsData]);

    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log("exercise data :", exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search)
               || (item.secondaryMuscles && item.secondaryMuscles.some(muscle => muscle.toLowerCase().includes(search)))
          );
     // console.log("body Parts : ", bodyParts);
      //console.log("searched : ", searchedExercises);

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 shadow-lg">
      <h1 className="font-bold text-center text-orange-500 text-4xl lg:text-4xl mb-8">
        Find Your Best Workout
        </h1>

      <div className="relative mb-12 w-full lg:w-[1170px]">
        <input
          className="w-full h-16 px-4 py-2 text-black font-bold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="absolute right-0 top-0 h-full px-6 bg-orange-600 text-white font-bold text-lg lg:text-xl rounded-r-full shadow-md transition duration-300 ease-in-out hover:bg-orange-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="relative w-full py-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Explore by Categories:</h2>
        <div className='my-5'>
          <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
