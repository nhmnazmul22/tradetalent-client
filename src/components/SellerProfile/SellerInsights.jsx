import React from "react";

const SellerInsights = ({profile}) => {

    return (
    <div className="">
      <h4 className="font-semibold">Insights</h4>
      <ul className="space-y-1 mt-2 text-base text-gray-600 dark:text-gray-400">
        <li>
          All-Time Earnings: <b>${profile?.totalEarning || 0}</b>
        </li>
        <li>
          Services Completed: <b>{profile?.totalOrderCompleted || 0}</b>
        </li>
        <li>
          Member Since: <b>{profile?.createdAt?.split("T")[0]}</b>
        </li>
      </ul>
    </div>
  );
};

export default SellerInsights;
