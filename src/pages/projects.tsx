import {motion} from "framer-motion"
import { Link } from "react-router"
const Projects = () => {
   const projects = [
      {
         title: "Online Shop",
         img_url: "/src/assets/projectImg/onlineShop.png",
         description: "Modern e-commerce application built with cutting-edge frontend technologies for my developer portfolio.",
         link: "https://github.com/Ali-Rahimpoor/demo-OnllineShop" 
      },
      {
         title: "FeedBack Application",
         img_url: "/src/assets/projectImg/comment.png",
         description: "A frontend project built with React + Vite + TypeScript for displaying and managing user feedback.",
         link: "https://ali-rahimpoor.github.io/FeedBack/" 
      },
      {
         title: "Weather App",
         img_url: "/src/assets/projectImg/weather.png",
         description: "Show Weather website modern and responsive project",
         link: "https://ali-rahimpoor.github.io/Weather/" 
      },
      {
         title: "Todo List",
         img_url: "/src/assets/projectImg/todo.png",
         description: "A modern Todo List application built with React, TypeScript, Tailwind CSS, and Redux Toolkit. This application allows users to manage their tasks efficiently with a clean and responsive interface.",
         link: "https://ali-rahimpoor.github.io/TodoList/" 
      },
      {
         title: "Image Gallery",
         img_url: "/src/assets/projectImg/gallery.png",
         description: "Image Gallery webSite this website get photo from Nasa Api",
         link: "https://ali-rahimpoor.github.io/ImageGallery/" 
      },
   ]

   return (
      <main className="font-Tinos mx-auto container lg:px-5 py-10">
         <motion.h2 initial={{opacity:0,y:-30}} animate={{opacity:1,y:0,transition:{delay:0.1}}} className="text-4xl font-bold text-center mb-15">My Projects</motion.h2>
         <motion.ul initial={{opacity:0,y:200}} animate={{opacity:1,y:0,transition: { delay: 0.5 }}} className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            {projects.map((project, index) => (
               <li
                  key={index}
                  className="group  max-w-lg relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
               >
                  {/* Project Image */}
                  <div className="relative h-100 overflow-hidden">
                     <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={project.img_url}
                        alt={project.title}
                     />
                     {/* Overlay with Link on Hover */}
                     <div className="absolute inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link target="_blank" to={project.link} className="text-white text-xl font-semibold underline">
                              View Project
                        </Link>
                     </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-4 h-35">
                     <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                     <p className="mt-2 line-clamp-3 lg:text-base text-sm text-gray-600">{project.description}</p>
                  </div>
               </li>
            ))}
         </motion.ul>
      </main>
   )
}

export default Projects