import React from "react";
import Navbar from "../navbar/page";
import type { Metadata } from "next";
import experience_data from "./experience_data";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

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
    },
  ];

  return (
    <>
      <Navbar />
      <main
        id="about"
        className="bg-white dark:bg-gray-900 min-h-screen md:px-20 lg:px-32 transition-colors duration-300 py-24"
      >
        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            I’m a passionate Full Stack Developer dedicated to building
            scalable, modern web applications with creativity, precision, and
            performance in mind.
          </p>
        </div>

        {/* Description Section */}
        <section className="max-w-6xl mx-auto space-y-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            I specialize in crafting elegant, responsive, and user-centric web
            applications. I enjoy turning complex problems into efficient
            solutions and translating design ideas into fully functional
            interfaces.
          </p>
          <p>
            My expertise spans the full stack, including modern frontend
            frameworks, backend technologies, databases, and deployment
            solutions. I’m continuously exploring new tools to enhance
            performance and create delightful user experiences.
          </p>
        </section>

        {/* Skills & Tech Stack */}
        <div className="max-w-6xl mx-auto text-center mt-32 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Here’s a summary of the technologies I work with across different
            layers.
          </p>
        </div>

        <section className="max-w-5xl mx-auto mb-24 px-4">
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
                    className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} hover:bg-indigo-50 dark:hover:bg-gray-700`}
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

        {/* Experience */}
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey so far.
          </p>
        </div>

        <section className="max-w-3xl mx-auto px-4 mb-24">
          <ol className="relative border-l-2 border-blue-600/30 dark:border-blue-400/30 ml-3">
            {experience_data.map((item) => {
              const isCurrent = item.end === null;

              return (
                <li
                  key={`${item.company}-${item.start}`}
                  className="mb-10 ml-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white dark:border-gray-900 ${
                      isCurrent ? "bg-green-500 animate-pulse" : "bg-blue-600"
                    }`}
                  />

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {item.role}
                      </h3>
                      {isCurrent && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-gray-900 dark:text-gray-100 font-medium mt-1">
                      {item.company}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {formatDate(item.start)} –{" "}
                      {item.end ? formatDate(item.end) : "Present"}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </>
  );
};

export default About;
