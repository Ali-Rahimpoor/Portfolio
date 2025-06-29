import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OnlineShop_img from "../assets/projectImg/onlineShop.png";
import FeedBack_img from "../assets/projectImg/comment.png";
import Gallery_img from "../assets/projectImg/gallery.png";
import Todo_img from "../assets/projectImg/todo.png";
import Weather_img from "../assets/projectImg/weather.png";
import coffeeShop_img from "../assets/projectImg/coffeshop.png";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title:"Coffee Shop OnlineShop",
      img_url:coffeeShop_img,
      description:"Modern e-commerce website built with React + vite + Redux + typeScript + tailwindcss",
      link:"https://ali-rahimpoor.github.io/Coffee-Shop/"
    },
    {
      title: "FeedBack Application",
      img_url: FeedBack_img,
      description: "A frontend project built with React + Vite + TypeScript for displaying and managing user feedback.",
      link: "https://ali-rahimpoor.github.io/FeedBack/"
    },
    {
      title: "Weather App",
      img_url: Weather_img,
      description: "Show Weather website modern and responsive project",
      link: "https://ali-rahimpoor.github.io/Weather/"
    },
    {
      title: "Online Shop",
      img_url: OnlineShop_img,
      description: "Modern e-commerce application built with cutting-edge frontend technologies for my developer portfolio.",
      link: "https://github.com/Ali-Rahimpoor/demo-OnllineShop"
    },
    {
      title: "Todo List",
      img_url: Todo_img,
      description: "A modern Todo List application built with React, TypeScript, Tailwind CSS, and Redux Toolkit. This application allows users to manage their tasks efficiently with a clean and responsive interface.",
      link: "https://ali-rahimpoor.github.io/TodoList/"
    },
    {
      title: "Image Gallery",
      img_url: Gallery_img,
      description: "Image Gallery webSite this website get photo from Nasa Api",
      link: "https://ali-rahimpoor.github.io/ImageGallery/"
    },
  ];

  // state برای کارت فعال
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // کلیک فقط در موبایل
  const handleToggle = (index: number) => {
    if (window.innerWidth < 768) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <main className="font-Tinos mx-auto container px-1 lg:px-5 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 justify-self-center place-items-center"
      >
        {projects.map((project, index) => (
          <li
            key={index}
            className="group max-w-lg relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleToggle(index)}
          >
            <div className="relative h-100 md:p-1 p-4  overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                src={project.img_url}
                alt={project.title}
              />

              {(activeIndex === index) && (
                <div className="absolute inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <Link
                    target="_blank"
                    to={project.link}
                    className="text-white text-xl font-semibold underline"
                  >
                    View Project
                  </Link>
                </div>
              )}
            </div>

            <div className="p-4 h-35">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-2 line-clamp-3 lg:text-base text-sm text-gray-600">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </motion.ul>
    </main>
  );
};

export default Projects;
