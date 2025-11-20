import React from "react";

const SellerAbout = ({ description }) => (
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6">
    <h2 className="text-xl font-semibold text-blue-500">About Me</h2>
    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
      {description}
    </p>
  </div>
);

export default SellerAbout;
