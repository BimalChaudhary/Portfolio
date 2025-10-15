"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrowIcon from "../../assets/arrow_icon.svg";
import Navbar from "../navbar/page";

// Services Data
const Services_Data = [
  {
    s_no: "01",
    s_name: "Web Design",
    s_desc_short:
      "Creating visually stunning websites with modern designs...",
    s_desc_full: [
      "Creating visually stunning websites with modern designs, responsive layouts, and intuitive navigation.",
      "I focus on blending creativity with user experience, ensuring every website is both functional and aesthetically pleasing.",
      "Leveraging tools like Figma, Tailwind CSS, and React, I deliver interactive, fast-loading, and accessible web experiences that captivate users and boost engagement across devices.",
    ],
  },
  {
    s_no: "02",
    s_name: "AI / ML",
    s_desc_short:
      "Developing intelligent AI/ML solutions for real-world problems...",
    s_desc_full: [
      "Developing intelligent AI/ML solutions for real-world problems, including predictive analytics, natural language processing, and computer vision.",
      "I utilize frameworks such as TensorFlow, PyTorch, and scikit-learn to build robust models that provide actionable insights.",
      "By integrating AI/ML with web and mobile platforms, I create smart, automated solutions that enhance efficiency, decision-making, and user experiences across industries.",
    ],
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(Services_Data.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-24 px-6 md:px-20 transition-colors duration-300">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          Our <span className="text-blue-600">Services</span>
        </h1>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Services_Data.map((service, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Service Number */}
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-2">
                {service.s_no}
              </h3>

              {/* Service Name */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
                {service.s_name}
              </h2>

              {/* Service Description */}
              <div className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed space-y-2">
                {expanded[index]
                  ? service.s_desc_full.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  : <p>{service.s_desc_short}</p>}
              </div>

              {/* Read More Button */}
              <div
                className="flex justify-center items-center gap-2 text-blue-600 font-semibold cursor-pointer select-none"
                onClick={() => handleToggle(index)}
              >
                <span>{expanded[index] ? "Show Less" : "Read More"}</span>
                <Image
                  src={arrowIcon}
                  alt="arrow"
                  width={18}
                  height={18}
                  className={`transition-transform duration-300 ${
                    expanded[index] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Services;
