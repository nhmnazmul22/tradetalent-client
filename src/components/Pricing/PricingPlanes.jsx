import React from "react";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plans = [
  {
    name: "Starter",
    price: "0% Service Fee",
    button: "Sign up",
    highlight: false,
  },
  {
    name: "Professional",
    price: "10% Service Fee",
    button: "Sign up",
    highlight: true,
  },
  {
    name: "Business",
    price: "20% Service Fee",
    button: "Sign up",
    highlight: false,
  },
];

const features = [
  "Access to TradeTalent global marketplace",
  "Verified Talent ID",
  "Freelancer work history & reviews",
  "Top-Rated & Rising Talent Search Filter",
  "Expert-Vetted Talent",
];

export default function PricingPlans() {
  return (
    <div className="overflow-x-auto border rounded-xl shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-neutral-800">
            <TableHead className="px-6 py-4 text-lg font-semibold w-1/2">
              Features
            </TableHead>

            {plans.map((plan) => (
              <TableHead
                key={plan.name}
                className={`px-6 py-4 text-center ${
                  plan.highlight
                    ? "border-x-2 border-blue-400 bg-blue-50/40 dark:bg-blue-900/20"
                    : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-blue-600 text-sm">{plan.price}</p>

                <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
                  {plan.button}
                </button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature} className="border-t">
              <TableCell className="px-6 py-4">{feature}</TableCell>

              {plans.map((plan) => (
                <TableCell key={plan.name} className="px-6 py-4 text-center">
                  <Check className="text-green-600 mx-auto" size={18} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
