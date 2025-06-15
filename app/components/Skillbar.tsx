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
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;