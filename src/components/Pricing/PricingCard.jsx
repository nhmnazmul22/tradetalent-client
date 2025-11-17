import { Check } from "lucide-react";
import React from "react";

const PricingCard = ({ title, price, subtitle, features, highlighted }) => {
  return (
    <div
      className={`border rounded-2xl p-8 flex flex-col shadow-md transition-all duration-300
        ${
          highlighted
            ? "border-blue-600 shadow-blue-200 dark:shadow-blue-900"
            : "border-gray-300 dark:border-gray-700"
        }
      `}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {subtitle}
      </p>

      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
          /month
        </span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check size={18} className="text-green-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300
          ${
            highlighted
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }
        `}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
