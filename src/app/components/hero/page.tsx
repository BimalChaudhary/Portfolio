"use client";

import React from "react";
import Image from "next/image";
import profileImg from "../../assets/profile_img.jpg";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center text-center py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Image
        src={profileImg}
        alt="Bimal Chaudhary Profile"
        width={180}
        height={180}
        className="rounded-full shadow-md mb-6 object-cover"
        priority
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        <span className="text-blue-600"> Bimal Chaudhary</span> <div>FULL STACK & MERN STACK</div>
        Developer from Nepal.
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-8">
        Passionate about building full-stack web apps using <span className="text-blue-600">Next JS, Fast API, PostgresSQL, MongoDB, Express,
        React, and Node.js.</span>
      </p>

      <div className="flex gap-4">
        <Link
          href="/components/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact with
        </Link>
        <a
          href="https://drive.google.com/drive/folders/1ufuz6vUXSVYAjd_5i7rOBo75KdRXaiSa"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
