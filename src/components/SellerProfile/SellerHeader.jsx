import React from "react";

const SellerHeader = ({ seller }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6 flex items-start gap-6">
      <div className="w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="flex-1 space-y-2">
        <h1 className="text-3xl font-bold text-blue-500">{seller.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{seller.bio}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          ⭐ {seller.rating} • Orders: {seller.totalOrders} • Reviews:{" "}
          {seller.totalReviews}
        </p>
        <div className="flex gap-3 mt-2">
          {seller.verified && (
            <span className="bg-green-600 text-xs px-3 py-1 rounded">
              Verified
            </span>
          )}
          {seller.featured && (
            <span className="bg-blue-500 text-xs px-3 py-1 rounded">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
