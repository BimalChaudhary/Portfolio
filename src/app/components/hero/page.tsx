"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../assets/profile_img.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Profile Image with glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <Image
          src={profileImg}
          alt="Bimal Chaudhary Profile"
          width={190}
          height={190}
          className="relative rounded-full shadow-2xl ring-4 ring-blue-500/20 object-cover"
          priority
        />
      </div>

      {/* Name and Role */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
        Hi, I’m <span className="text-blue-600">Bimal Chaudhary</span>
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-6 tracking-wide">
        <span className="text-blue-600">Full Stack & MERN Stack Developer</span> from Nepal
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-10 text-base md:text-lg leading-relaxed">
        Passionate about crafting scalable, high-performance web applications using{" "}
        <span className="text-blue-600 font-semibold">
          Next.js, FastAPI, PostgreSQL, MongoDB, Express, React,
        </span>{" "}
        and{" "}
        <span className="text-blue-600 font-semibold">Node.js.</span> I focus on writing clean, maintainable code and delivering exceptional user experiences.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/components/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Me
        </Link>
        <a
          href="https://drive.google.com/drive/folders/1ufuz6vUXSVYAjd_5i7rOBo75KdRXaiSa"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white shadow-sm transition-all duration-300"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
