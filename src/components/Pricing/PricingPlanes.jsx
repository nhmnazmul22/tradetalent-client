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
import { features, plans } from "@/constant";
import { motion } from "motion/react";
import { fadeInScale } from "@/lib/motionVariants";

export default function PricingPlans() {
  return (
    <motion.div
      variants={fadeInScale}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="overflow-x-auto border rounded-xl shadow-sm"
    >
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
    </motion.div>
  );
}
