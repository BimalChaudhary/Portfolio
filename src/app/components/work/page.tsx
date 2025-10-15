"use client";

import Image from "next/image";
import mywork_data from "./mywork_data";
import Navbar from "../navbar/page";

const WorkPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 px-6 md:px-20 transition-colors duration-300">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          My <span className="text-blue-600">Work</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mywork_data.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Clickable Image */}
              <a
                href={item.w_img.src} // <- use .src for imported images
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <Image
                  src={item.w_img}
                  alt={item.w_title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.w_title}
                </h2>
                <a
                  href={item.w_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default WorkPage;
