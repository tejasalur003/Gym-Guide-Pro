export const sections = [
  {
    title: 'Explore',
    links: ['Resources', 'Blog', 'Documents']
  },
  {
    title: 'Community',
    links: ['Community Central', 'Support', 'Help', 'My info']
  },
  {
    title: 'Company',
    links: ['About us', 'Partners', 'Customers', 'Contact us']
  }
];

export const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/bmi', text: 'BMI Calculator' },
  { to: '/planner', text: 'Planner' },
  { to: '/contact', text: 'ContactUs' }
];

export const formFields = {
  gender: {
    label: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    type: 'radio',
  },
  unit: {
    label: 'Unit of Measurement',
    options: [
      { value: 'lbs', label: 'Lbs' },
      { value: 'kgs', label: 'Kgs' },
    ],
    type: 'radio',
  },
  bodyweight: {
    label: 'Bodyweight',
    type: 'number',
  },
  fitnessLevel: {
    label: 'Fitness Level',
    options: [
      { value: '', label: 'Select your fitness level' },
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
    ],
    type: 'select',
  },
  fitnessGoal: {
    label: 'Fitness Goal',
    options: [
      { value: '', label: 'Select your fitness goal' },
      { value: 'lose weight', label: 'Lose weight' },
      { value: 'build muscle', label: 'Build muscle' },
      { value: 'improve endurance', label: 'Improve endurance' },
    ],
    type: 'select',
  },
  workoutDays: {
    label: 'How many days can you workout per week?',
    type: 'range',
    min: 1,
    max: 6,
  },
  equipment: {
    label: 'Equipment',
    options: [
      { value: '', label: 'Select equipment' },
      { value: 'functional', label: 'All' },
    ],
    type: 'select',
  },
};