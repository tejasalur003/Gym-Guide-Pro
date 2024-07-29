import React from 'react';
import { useLocation } from 'react-router-dom';
import { generateWorkoutPlan } from './allexercises'; 
import { downloadPDF } from './donwloadPdf'; 

const WorkoutPlan = () => {
  const location = useLocation();
  const {
    fitnessLevel,
    fitnessGoal,
    workoutDays,
    equipment,
  } = location.state || {};

  const workoutPlan = generateWorkoutPlan(
    fitnessLevel,
    fitnessGoal,
    workoutDays,
    equipment
  );

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">Your Workout Plan</h1>
      <table id="workout-plan-table" className="table-auto w-full mb-6 border-collapse border border-orange-600">
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="px-4 py-2 border border-orange-600 text-center">Day</th>
            <th className="px-4 py-2 border border-orange-600">Exercise</th>
            <th className="px-4 py-2 border border-orange-600">Sets</th>
            <th className="px-4 py-2 border border-orange-600">Reps</th>
          </tr>
        </thead>
        <tbody>
        {workoutPlan.map((day, dayIndex) => (
            <React.Fragment key={dayIndex}>
              {day.exercises.map((exercise, exerciseIndex) => (
                <tr key={exerciseIndex} className={exerciseIndex % 2 === 0 ? 'bg-orange-100' : 'bg-white'}>
                  {exerciseIndex === 0 && (
                    <td className="px-4 py-2 border border-orange-600 text-center" rowSpan={day.exercises.length}>
                      {`Day ${dayIndex + 1}`}
                    </td>
                  )}
                  <td className="px-4 py-2 border border-orange-600">{exercise.name}</td>
                  <td className="px-4 py-2 border border-orange-600">{exercise.sets}</td>
                  <td className="px-4 py-2 border border-orange-600">{exercise.reps}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <button 
          onClick={downloadPDF} 
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition duration-100"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlan;