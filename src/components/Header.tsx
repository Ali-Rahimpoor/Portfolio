import { RiHome4Line } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import {motion} from "framer-motion";
import { Link } from "react-router";
const Header = ()=>{

   const navItems = [
      {id:"home",label:"Home",icon:<RiHome4Line/>,link:"/"},
      {id:"about",label:"About",icon:<IoPersonCircleOutline/>,link:"/about"},
      {id:"projects",label:"Projects",icon:<GoProjectSymlink/>,link:"/projects"},
   ]

   return(
      <header className="font-Karla">
         <nav className="container flex md:flex-row flex-col justify-between px-6 md:px-16 pt-2">
            <motion.h1 
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}} 
            className="sm:text-3xl text-xl bg-gradient-to-r mb-1 sm:mb-5 from-blue-200 to-purple-300 bg-clip-text text-transparent">Ali-<span className="">Rahimpoor</span>
            </motion.h1>
            <ul className="flex items-center justify-between pr-0 lg:pr-12 sm:text-xl text-lg md:gap-x-8">
               {
                  navItems.map(item=>(
                     <li key={item.id}>
                        <motion.button                        
                        whileTap={{scale:0.95}} 
                        whileHover={{scale:1.10}} 
                        initial={{opacity:0,y:-20}} 
                        animate={{opacity:1,y:0}}>
                           <Link  className="flex items-center justify-center" to={item.link}>
                           {item.icon}
                           {item.label}
                           </Link>
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