import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutTabContent = ({profile}) => {
  return (
    <Card className="p-6 bg-white dark:bg-neutral-900 ">
      <CardContent className="p-0 space-y-6">
        {/* Details */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Experience time</p>
            <p className="font-medium">{profile?.experienceTime || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Qualification</p>
            <p className="font-medium">{profile?.qualification || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="font-medium">{profile?.gender || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Age</p>
            <p className="font-medium">{profile?.age || "N/A"} Years</p>
          </div>
        </div>

        {/* About Text */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {profile?.description || "N/A"}
        </p>

        {/* Work Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Work Experience</h3>
          <ul className="space-y-3">
              {profile?.experiences.map((experience, index)=>(
                  <li key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">{experience?.position}</h4>
                      <p className="text-sm text-gray-500">
                          {experience?.companyName} – {experience?.duration}
                      </p>
                  </li>
              ))}
          </ul>
        </div>

          <div className={`mt-5`}>
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <ul className="space-y-3">
                  {profile?.educations.map((edu, index)=>(
                      <li key={index} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold">{edu?.cartificateName}</h4>
                          <p className="text-sm text-gray-500">
                              {edu?.instutionName} – {edu?.duration}
                          </p>
                      </li>
                  ))}
              </ul>
          </div>
      </CardContent>
    </Card>
  );
};

export default AboutTabContent;
