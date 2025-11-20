import React from "react";
import Button from "../common/Button";

const SellerSidebar = ({ seller }) => (
  <div className="space-y-6 sticky top-20">
    <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-500 mb-4">Seller Info</h3>
      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-medium">Member Since:</span> {seller.since}
        </p>
        <p>
          <span className="font-medium">Location:</span> {seller.location}
        </p>
        <div>
          <h4 className="font-medium mb-1">Languages</h4>
          <ul className="list-disc ml-4">
            {seller.languages.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
      <Button className="mt-4 w-full">Contact Seller</Button>
    </div>
  </div>
);

export default SellerSidebar;
