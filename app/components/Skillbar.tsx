import React from 'react';

type TSkillBar = {
   skill:string;
   percentage:number;
}

const SkillBar = ({ skill, percentage }:TSkillBar) => {
  return (
    <div className="mb-6">
      {/* Title and Percentage */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="sm:text-lg font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
        <span className='text-sm hidden sm:inline bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent'>{percentage}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="md:w-80 sm:w-40 w-25 bg-gray-200  rounded-full h-3 overflow-hidden dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;