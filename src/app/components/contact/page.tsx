"use client";

import React, { FormEvent } from "react";
import Image from "next/image";

import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import tiktokIcon from "../../assets/tiktok.png";
import youtubeIcon from "../../assets/youtube.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

import Navbar from "../navbar/page";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "e10bf62b-46f8-47d4-afd4-d393169e6662");

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message || "Message sent successfully!");
        event.currentTarget.reset();
      } else {
        toast.error(res.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error); // Using the error variable here to avoid ESLint warning
      toast.error("Network error. Please try again later.");
    }
  };

  const socialLinks = [
    {
      icon: facebookIcon,
      name: "Facebook",
      url: "https://www.facebook.com/Bimal.Chaudhary.2058",
    },
    {
      icon: instagramIcon,
      name: "Instagram",
      url: "https://www.instagram.com/bimaldhamlauwha",
    },
    {
      icon: twitterIcon,
      name: "Twitter",
      url: "https://www.twitter.com/VimalCh10975830",
    },
    {
      icon: tiktokIcon,
      name: "TikTok",
      url: "https://www.tiktok.com/@bimal5555555",
    },
    {
      icon: youtubeIcon,
      name: "YouTube",
      url: "https://www.youtube.com/@dhamlauwha8568",
    },
    {
      icon: githubIcon,
      name: "GitHub",
      url: "https://github.com/BimalChaudhary",
    },
    {
      icon: linkedinIcon,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bimalchaudhary/",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        id="contact"
        className="md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Contact
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Let&apos;s talk
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I am currently available to take on new projects. Feel free to
              send me a message about anything you&apos;d like me to work on.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src={mailIcon} alt="mail" width={24} height={24} />
                <a
                  href="mailto:bimalchaudhary014@gmail.com"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  bimalchaudhary014@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Image src={callIcon} alt="call" width={24} height={24} />
                <p className="text-gray-700 dark:text-gray-300">
                  +977 9865447501
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={locationIcon}
                  alt="location"
                  width={24}
                  height={24}
                />
                <p className="text-gray-700 dark:text-gray-300">
                  Bhimdatta-02, Kanchanpur, Far-West Nepal
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {socialLinks.map(({ icon, name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 text-gray-800 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  <Image src={icon} alt={name} width={24} height={24} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <form
            onSubmit={onSubmit}
            className="md:w-1/2 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-colors duration-300"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-1 font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-1 font-medium"
              >
                Write your message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit Now
            </button>
          </form>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default Contact;
