import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-20 lg:mt-32 px-5 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
        Watch <span className="text-red-500 capitalize">{name}</span> Exercise Videos
      </h2>
      <div className="flex flex-wrap justify-between p-5 mx-10">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <button
            key={index}
            className="exercise-video flex-grow border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full lg:w-[calc(33.33% - 2rem)] lg:max-w-[300px]"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${item.video.videoId}`, '_blank')}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="w-full h-48 lg:h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">{item.video.title}</h3>
              <p className="text-sm lg:text-base text-gray-600">{item.video.channelName}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
