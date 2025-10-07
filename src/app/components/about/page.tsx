import React from "react";
import Navbar from "../navbar/page";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description: "About my skills and technologies.",
};

const About: React.FC = () => {
  const techStack = [
    {
      layer: "Frontend",
      tools: "Next.js, React Flow, TailwindCSS, Shadcn/UI",
    },
    {
      layer: "Backend",
      tools: "FastAPI, Redis, PostgreSQL, GraphQL, Node JS, Mongo DB",
    },
    {
      layer: "Deployment",
      tools: "Docker, Kubernetes (EKS)",
    },
    {
      layer: "Security",
      tools: "Auth0",
    }
  ];

  return (
    <>
      <Navbar />
      <main
        id="about"
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen md:px-20 lg:px-32 transition-colors duration-300 pb-24"
      >
        {/* Title */}
        <div className="max-w-4xl mx-auto mb-16 text-center pt-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Full Stack Developer dedicated to building scalable,
            modern web experiences with creativity and precision.
          </p>
        </div>

        {/* About Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          {/* Left Section (Profile Image) */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-600 dark:border-blue-500 group">
              <Image
                src="/bimal.jpg"
                alt="My Profile"
                width={500}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Section (Description) */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with a strong interest
              in building elegant, responsive, and user-centric web applications.
              I enjoy translating design ideas into fully functional interfaces
              with clean, optimized code.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise lies in the <span className="font-semibold text-blue-600">Full Stack Developer</span>, and I’m always exploring
              new technologies to enhance performance and create delightful
              user experiences.
            </p>
          </div>
        </section>

        {/* Skills Title */}
        <div className="max-w-6xl mx-auto text-center mt-24 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here’s an overview of the technologies I work with across different layers.
          </p>
        </div>

        {/* Tech Stack Table */}
        <section className="max-w-5xl mx-auto mb-20 px-4">
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <table className="w-full border-collapse text-left">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-600">
                <tr>
                  <th className="px-6 py-4 text-white font-semibold text-lg rounded-tl-2xl">
                    Layer
                  </th>
                  <th className="px-6 py-4 text-white font-semibold text-lg rounded-tr-2xl">
                    Tools & Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {techStack.map(({ layer, tools }, index) => (
                  <tr
                    key={layer}
                    className={`transition-colors duration-200 ${index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900"
                      } hover:bg-indigo-50 dark:hover:bg-gray-700`}
                  >
                    <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium border-b border-gray-200 dark:border-gray-700">
                      {layer}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {tools}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="max-w-5xl mx-auto mt-16 border-t dark:border-gray-700 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Secretary", subtitle: "Mahendranagar CBS" },
            { title: "Accountant", subtitle: "Shalom AG Church" },
            { title: "4+", subtitle: "Projects Completed" },
          ].map(({ title, subtitle }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
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
