import React from "react";
import Navbar from "../navbar/page";
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
        className="bg-white dark:bg-gray-900 min-h-screen md:px-20 lg:px-32 transition-colors duration-300 py-24"
      >
        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            I’m a passionate Full Stack Developer dedicated to building scalable, modern web applications with creativity, precision, and performance in mind.
          </p>
        </div>

        {/* Description Section */}
        <section className="max-w-6xl mx-auto space-y-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            I specialize in crafting elegant, responsive, and user-centric web applications. I enjoy turning complex problems into efficient solutions and translating design ideas into fully functional interfaces.
          </p>
          <p>
            My expertise spans the full stack, including modern frontend frameworks, backend technologies, databases, and deployment solutions. I’m continuously exploring new tools to enhance performance and create delightful user experiences.
          </p>
        </section>

        {/* Skills & Tech Stack */}
        <div className="max-w-6xl mx-auto text-center mt-32 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Here’s a summary of the technologies I work with across different layers.
          </p>
        </div>

        <section className="max-w-5xl mx-auto mb-24 px-4">
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <table className="w-full border-collapse text-left">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-600">
                <tr>
                  <th className="px-6 py-4 text-white font-semibold text-lg rounded-tl-2xl">Layer</th>
                  <th className="px-6 py-4 text-white font-semibold text-lg rounded-tr-2xl">Tools & Services</th>
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

        {/* Achievements */}
        <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Secretary", subtitle: "Mahendranagar CBS" },
            { title: "Accountant", subtitle: "Shalom AG Church" },
            {title: "Frontend Developer", subtitle:"Kyra Works Pvt. Ltd"},
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
