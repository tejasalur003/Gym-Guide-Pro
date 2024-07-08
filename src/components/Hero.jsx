import React from 'react';
import GymImage1 from '../assets/images/hero.jpg';
import GymImage2 from '../assets/images/hero2.jpg';

const ExploreButton = () => {
  const handleClick = () => {
    const element = document.getElementById('exercises');
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="z-20 bg-orange-600 hover:bg-orange-400 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300 ease-in-out inline-block mt-4"
    >
      Explore Exercises
    </button>
  );
};

const Hero = () => (
  <div className="relative bg-black text-white py-20 lg:px-20 px-6">
    {/* Gym Images Grid */}
    <div className="absolute top-0 left-0 w-1/2 h-full opacity-30 z-10">
      <img src={GymImage1} alt="Gym" className="object-cover w-full h-full" />
    </div>
   
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 z-10">
      <img src={GymImage2} alt="Gym" className="object-cover w-full h-full" />
    </div>

    {/* Text Content */}
    <div className="max-w-4xl mx-auto text-center z-20 relative">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-orange-500">Fitness Club</h1>
      <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
        Sweat, Smile <br /> And Repeat
      </h2>
      <p className="text-lg lg:text-xl mb-8 leading-relaxed">
        Check out the most effective exercises personalized to you
      </p>

      <ExploreButton />
    
    </div>
    
  </div>
);

export default Hero;
