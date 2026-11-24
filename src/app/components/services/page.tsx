"use client";

import Image from "next/image";
import Services_Data from "../../assets/services_data";

import arrowIcon from "../../assets/arrow_icon.svg";
import Navbar from "../navbar/page";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-900">
        <h1 className=" text-center mb-12 relative text-4xl font-bold text-gray-800 dark:text-gray-100">
          Services
        </h1>
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
          {/* Services Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {Services_Data.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 dp-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {service.s_no}
                </h3>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {service.s_name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.s_desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                  <span className="font-semibold">Read More</span>
                  <Image src={arrowIcon} alt="arrow" width={16} height={16} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
