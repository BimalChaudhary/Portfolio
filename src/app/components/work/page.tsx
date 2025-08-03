"use client"; // if it's a client component

import Image from "next/image";
import mywork_data from "./mywork_data";
import Navbar from "../navbar/page";

const WorkPage = () => {
  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-900">
        <h1 className="text-4xl text-center font-bold text-gray-800 dark:bg-gray-900 dark:text-gray-100 mb-2">
          Work
        </h1>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
          {mywork_data.map((item, index) => (
            <div
              key={index}
              className="rounded shadow p-4 bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <Image
                src={item.w_img}
                alt={item.w_title}
                width={400}
                height={300}
                className="w-full h-auto rounded"
              />
              <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.w_title}
              </h2>
              <a
                href={item.w_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkPage;
