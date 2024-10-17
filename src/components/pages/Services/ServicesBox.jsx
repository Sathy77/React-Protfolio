import React from "react";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const ServicesData = [
  {
    name: "Backend Development",
    description: "Python is a language.",
    icon: <SiPython className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Django",
    description: "Django is the framework of Python.",
    icon: <SiDjango className="text-4xl" />,
    bgColor: "bg-teal-500/70",
  },
  {
    name: "PostgreSQL",
    description: "PostgreSQL is a database.",
    icon: <SiPostgresql className="text-4xl" />,
    bgColor: "bg-blue-800",
  },
  {
    name: "Security",
    description: "Using those combination we can ensure security.",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;