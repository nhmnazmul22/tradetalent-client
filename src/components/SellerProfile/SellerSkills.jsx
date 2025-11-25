import React from "react";
import { Badge } from "../ui/badge";

const SellerSkills = ({ skills }) => (
  <div className="mt-6">
    <h4 className="font-semibold">Skills</h4>
    <div className="flex gap-2 mt-2 flex-wrap">
      {skills && skills.length > 0 && skills.map((s) => (
        <Badge variant="secondary" className="text-sm" key={s}>
          {s}
        </Badge>
      ))}
    </div>
  </div>
);

export default SellerSkills;
