import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];


  const capitalizeFirstLetter = (str) => {  
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-20">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image w-96 h-96 lg:w-auto lg:h-auto" />
      <div className="flex flex-col gap-8 lg:gap-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-orange-500">{capitalizeFirstLetter(name)}</h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Exercises keep you strong. <span className="capitalize">{name}</span> is one
          of the best exercises to target your {target}. It will help you improve your
          mood and gain energy.
        </p>
        <div className="flex flex-col gap-8 lg:gap-12">
          {extraDetail.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <button className="bg-orange-100 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-10 h-10 lg:w-12 lg:h-12" />
              </button>
              <p className="text-xl lg:text-2xl text-gray-700 capitalize">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
