"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { projects } from "@/data/projectsData";

// Fonts
const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Select Projects");

  const categories = [
    "Select Projects",
    "Social Media Management",
    "Digital Media",
    "Design & Print",
  ];

  const filteredProjects =
    selectedCategory === "Select Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className='flex mt-16'>
      {/* Left Side - Category Selector */}
      <div className={`${clashDisplay.className} w-1/4 px-12 text-[22px]`}>
        <ul className='space-y-4'>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer flex items-center ${
                selectedCategory === category
                  ? "text-black" // Active state: Black text
                  : "text-gray-400 hover:text-black" // Inactive state: Gray with hover to black
              }`}
              onClick={() => setSelectedCategory(category)}>
              {selectedCategory === category && (
                <div className='w-1 h-8 bg-[#F56E0F] mr-2'></div>
              )}
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Project Cards */}
      <div className='w-3/4 grid grid-cols-2 gap-6 px-8'>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className='bg-white rounded-xl p-6 border border-gray-200 h-auto'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full rounded-[20px] object-cover mb-4'
            />
            <span
              className={`${plusJakartaSans.className} text-black mt-4 bg-gray-100 border px-4 py-2 rounded-full`}>
              Case Study
            </span>
            <h3
              className={`${clashDisplay.className} text-2xl font-semibold mt-2`}>
              {project.title}
            </h3>
            <p className={`${plusJakartaSans.className} text-gray-600 mt-2`}>
              {project.description}
            </p>
            <a
              href='#'
              className={`${plusJakartaSans.className} mt-4 text-black  hover:text-[#F56E0F] flex items-center space-x-2 underline`}>
              <span>View Case Study</span>
              <svg
                viewBox='0 0 1024 1024'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='w-5 h-5'>
                <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
                <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
