import React from "react";

const SellerSkills = ({ skills }) => (
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6">
    <h2 className="text-xl font-semibold text-blue-500 mb-3">Skills</h2>
    <div className="flex gap-2 flex-wrap">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SellerSkills;
