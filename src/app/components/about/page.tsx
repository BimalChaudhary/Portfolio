import React from "react";
import Navbar from "../navbar/page";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description: "About my skills.",
};

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main
        id="about"
        className="bg-white dark:bg-gray-900 min-h-screen md:px-20 lg:px-32 transition-colors duration-300"
      >
        {/* Title */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
        </div>

        {/* About Sections */}
        <section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg flex items-center justify-center">
              <Image
                src="/bimal.jpg"
                alt="My Profile"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-5">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. I specialize in building
                scalable, performant web applications with modern technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My passion lies in being a MERN STACK Developer, continuously
                learning and applying the latest in web development.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {[
                { skill: "HTML", width: "w-[80%]" },
                { skill: "CSS", width: "w-[60%]" },
                { skill: "Tailwind CSS", width: "w-[60%]" },
                { skill: "JavaScript", width: "w-[70%]" },
                { skill: "TypeScript", width: "w-[60%]" },
                { skill: "React JS", width: "w-[70%]" },
                { skill: "Express JS", width: "w-[60%]" },
                { skill: "Next JS", width: "w-[70%]" },
                { skill: "Python", width: "w-[30%]" },
              ].map(({ skill, width }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {skill}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {width.replace("w-", "").replace("%", "")}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                    <div className={`bg-blue-600 h-3 rounded-full ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="max-w-5xl mx-auto mt-20 border-t dark:border-gray-700 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Secretary", subtitle: "Mahendranagar CBS" },
            { title: "Accountant", subtitle: "Shalom AG Church" },
            { title: "4+", subtitle: "Projects" },
          ].map(({ title, subtitle }) => (
            <div key={title} className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {subtitle}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
