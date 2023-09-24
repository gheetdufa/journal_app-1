// @ts-ignore
"use client";
import exp from 'constants';
import { Navbar } from '../components/Navbar';
import 'tailwindcss/tailwind.css';
import {  BsGithub, BsLinkedin, } from 'react-icons/bs';

export default function Contact() {
  // Define contact information for 4 individuals
  const contacts = [
    {
      name: "Utsav Kataria",
      position: "Developer",
      email: "utsavkataria@gmail.com",
      linkedin: "https://www.linkedin.com/in/utsav-kataria/",
      phone: "(408) 421-9160",
      imageSrc: "/img14s.jpg", 
    },
    {
      name: "Patrick DeBoy",
      position: "Developer",
      email: "deboypd@gmail.com | deboy.xyz",
      linkedin: "https://www.linkedin.com/in/patrick-deboy-558645152/",
      phone: "410-782-5396",
      imageSrc: "/IMG_1882.jpg", 
    },
    {
      name: "Ateef Mahmud",
      position: "Developer",
      email: "ateefayman@gmail.com",
      linkedin: "https://www.linkedin.com/in/ateef-mahmud-22b766240/",
      phone: "(650) 686-1123",
      imageSrc: "/PXL_20230726_035208299~2.jpg", 
    },
    {
      name: "Bob Brown",
      position: "Developer",
      email: "bob@example.com",
      phone: "(678) 901-2345",
      imageSrc: "/im16e.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-red-400">
            Contact Us
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                src={contact.imageSrc}
                alt={`${contact.name}'s picture`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {contact.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {contact.position}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Email: {contact.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Phone: {contact.phone}
              </p>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              <BsGithub />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
