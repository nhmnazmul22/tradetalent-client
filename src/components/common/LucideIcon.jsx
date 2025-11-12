import React from "react";

const LucideIcon = ({ name, className }) => {
  const Icon = name;
  return Icon ? <Icon className={className} /> : null;
};

export default LucideIcon;
