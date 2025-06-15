"use client"
import { RiHome4Line } from "react-icons/ri";import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import {motion,AnimatePresence, animate} from "framer-motion";
import { label } from "framer-motion/client";
const Header = ()=>{

   const navItems = [
      {id:"home",label:"Home",icon:<RiHome4Line/>},
      {id:"about",label:"About",icon:<IoPersonCircleOutline/>},
      {id:"projects",label:"Projects",icon:<GoProjectSymlink/>},
   ]

   return(
      <header className="font-Karla">
         <nav className="container flex justify-between px-16 pt-2">
            <motion.h1 
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}} 
            className="text-3xl">Ali<span className="text-gray-400">Developer</span>
            </motion.h1>
            <ul className="flex items-center justify-between gap-x-10 pr-12 text-xl">
               {
                  navItems.map(item=>(
                     <li key={item.id}>
                        <motion.button 
                        className="flex items-center justify-center"
                        whileTap={{scale:0.95}} 
                        whileHover={{scale:1.10}} 
                        initial={{opacity:0,y:-20}} 
                        animate={{opacity:1,y:0}}>
                           {item.icon}
                           {item.label}
                        </motion.button>
                     </li>
                  ))
               }
            </ul>
         </nav>
      </header>
   )
}
export default Header;