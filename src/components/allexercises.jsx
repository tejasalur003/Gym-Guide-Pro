export const generateWorkoutPlan = (fitnessLevel, fitnessGoal, workoutDays, equipment) => {
  const workoutPlan = [];
  const exercises = {
    beginner: {
      'lose weight': [
        { name: 'Squats', sets: 3, reps: 12 },
        { name: 'Push-ups', sets: 3, reps: 12 },
        { name: 'Lunges', sets: 3, reps: 12 },
        { name: 'Plank', sets: 3, reps: '30s' },
        { name: 'Jump Rope', sets: 3, reps: '1 min' },
        { name: 'Burpees', sets: 3, reps: 10 },
        { name: 'Mountain Climbers', sets: 3, reps: 20 },
      ],
      'build muscle': [
        { name: 'Bench Press', sets: 3, reps: 8 },
        { name: 'Lat Pulldowns', sets: 3, reps: 12 },
        { name: 'Bicep Curls', sets: 3, reps: 12 },
        { name: 'Deadlifts', sets: 3, reps: 8 },
        { name: 'Shoulder Press', sets: 3, reps: 12 },
        { name: 'Tricep Dips', sets: 3, reps: 12 },
        { name: 'Leg Press', sets: 3, reps: 10 },
      ],
      'improve endurance': [
        { name: 'Jumping Jacks', sets: 3, reps: 30 },
        { name: 'Burpees', sets: 3, reps: 12 },
        { name: 'Mountain Climbers', sets: 3, reps: 30 },
        { name: 'High Knees', sets: 3, reps: '1 min' },
        { name: 'Running', sets: 3, reps: '5 min' },
        { name: 'Rowing', sets: 3, reps: '3 min' },
        { name: 'Cycling', sets: 3, reps: '5 min' },
      ],
    },
    intermediate: {
      'lose weight': [
        { name: 'Squat Jumps', sets: 4, reps: 15 },
        { name: 'Incline Push-ups', sets: 4, reps: 15 },
        { name: 'Walking Lunges', sets: 4, reps: 20 },
        { name: 'Plank with Shoulder Tap', sets: 4, reps: '30s' },
        { name: 'High Knees', sets: 4, reps: '1 min' },
        { name: 'Kettlebell Swings', sets: 4, reps: 15 },
        { name: 'Russian Twists', sets: 4, reps: 20 },
      ],
      'build muscle': [
        { name: 'Incline Bench Press', sets: 4, reps: 10 },
        { name: 'Pull-ups', sets: 4, reps: 10 },
        { name: 'Hammer Curls', sets: 4, reps: 15 },
        { name: 'Romanian Deadlifts', sets: 4, reps: 10 },
        { name: 'Lateral Raises', sets: 4, reps: 15 },
        { name: 'Chest Flyes', sets: 4, reps: 12 },
        { name: 'Cable Rows', sets: 4, reps: 12 },
      ],
      'improve endurance': [
        { name: 'Box Jumps', sets: 4, reps: 15 },
        { name: 'Burpee to Pull-up', sets: 4, reps: 15 },
        { name: 'Spider-Man Climbers', sets: 4, reps: 20 },
        { name: 'Sprints', sets: 4, reps: '30s' },
        { name: 'Jump Rope', sets: 4, reps: '2 min' },
        { name: 'Treadmill Intervals', sets: 4, reps: '5 min' },
        { name: 'Battle Ropes', sets: 4, reps: '1 min' },
      ],
    },
    advanced: {
      'lose weight': [
        { name: 'Plyometric Squats', sets: 5, reps: 20 },
        { name: 'Decline Push-ups', sets: 5, reps: 20 },
        { name: 'Bulgarian Split Squats', sets: 5, reps: 20 },
        { name: 'Plank to Push-up', sets: 5, reps: '1 min' },
        { name: 'Sprint Intervals', sets: 5, reps: '30s' },
        { name: 'Medicine Ball Slams', sets: 5, reps: 15 },
        { name: 'Agility Ladder Drills', sets: 5, reps: '1 min' },
      ],
      'build muscle': [
        { name: 'Weighted Bench Press', sets: 5, reps: 6 },
        { name: 'Weighted Pull-ups', sets: 5, reps: 6 },
        { name: 'Barbell Curls', sets: 5, reps: 10 },
        { name: 'Sumo Deadlifts', sets: 5, reps: 6 },
        { name: 'Arnold Press', sets: 5, reps: 10 },
        { name: 'Cable Crossovers', sets: 5, reps: 12 },
        { name: 'Tricep Extensions', sets: 5, reps: 10 },
      ],
      'improve endurance': [
        { name: 'Tuck Jumps', sets: 5, reps: 20 },
        { name: 'Burpee Pull-ups', sets: 5, reps: 20 },
        { name: 'Skater Hops', sets: 5, reps: 30 },
        { name: 'Battle Ropes', sets: 5, reps: '1 min' },
        { name: 'Hill Sprints', sets: 5, reps: '1 min' },
        { name: 'Tabata Cycling', sets: 5, reps: '4 min' },
        { name: 'Rowing Intervals', sets: 5, reps: '4 min' },
      ],
    },
  };


  let aggregatedExercises = [...exercises[fitnessLevel][fitnessGoal]];

  if (fitnessLevel === 'intermediate') {
    aggregatedExercises = [
      ...exercises['beginner'][fitnessGoal],
      ...aggregatedExercises,
    ];
  } else if (fitnessLevel === 'advanced') {
    aggregatedExercises = [
      ...exercises['beginner'][fitnessGoal],
      ...exercises['intermediate'][fitnessGoal],
      ...aggregatedExercises,
    ];
  }

  for (let i = 0; i < workoutDays; i++) {
    const day = {
      exercises: [],
    };

    const numberOfExercisesPerDay = Math.ceil(aggregatedExercises.length / workoutDays);

    for (let j = 0; j < numberOfExercisesPerDay; j++) {
      const exerciseIndex = (i * numberOfExercisesPerDay + j) % aggregatedExercises.length;
      day.exercises.push(aggregatedExercises[exerciseIndex]);
    }

    workoutPlan.push(day);
  }

  return workoutPlan;
};
