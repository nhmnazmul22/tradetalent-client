import React, {useState} from "react";
import Button from "../common/Button";
import OrderCreateModal from "@/components/Form/OrderCreateModal.jsx";

const PricingBox = ({ pricing, className }) => {
    const [open, setOpen] = useState(false);

    return (
    <div
      className={`
        border rounded p-4
        bg-white
        text-gray-900
        dark:bg-neutral-800
        dark:text-gray-100
        dark:border-gray-700
        ${className}
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{pricing.title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ${pricing.price}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {pricing.deliveryDays}d
          </div>
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {pricing.description}
      </p>

      <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
        {pricing.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="mt-4 flex space-x-2">
        <Button variant="outline" className="flex-1 py-2 rounded" onClick={()=> setOpen(true)}>
          Select
        </Button>

        <Button className="py-2 px-3 rounded w-32" onClick={()=> setOpen(true)}>Continue</Button>
      </div>

        <OrderCreateModal setOpen={setOpen} open={open}></OrderCreateModal>
    </div>
  );
};

export default PricingBox;
