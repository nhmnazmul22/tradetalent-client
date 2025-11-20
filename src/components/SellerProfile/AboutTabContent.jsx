import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutTabContent = () => {
  return (
    <Card className="p-6 bg-white dark:bg-neutral-900 ">
      <CardContent className="p-0 space-y-6">
        {/* Details */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Experience time</p>
            <p className="font-medium">3 – 5 Years</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Qualification</p>
            <p className="font-medium">Certificate</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="font-medium">Female</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Age</p>
            <p className="font-medium">30 – 35</p>
          </div>
        </div>

        {/* About Text */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem… (mock
          description here).
        </p>

        {/* Work Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Work Experience</h3>
          <ul className="space-y-3">
            <li className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Team Leader</h4>
              <p className="text-sm text-gray-500">
                Alpabe Corporation – July 1, 2024 – Present
              </p>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutTabContent;
