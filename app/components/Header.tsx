import { RiHome4Line } from "react-icons/ri";import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
const Header = ()=>{

   return(
      <header className="font-Karla">
         <nav className="container flex justify-between px-16 pt-2">
            <h1 className="text-3xl">Ali<span className="text-gray-400">Developer</span></h1>
            <ul className="flex items-center justify-between gap-x-10 pr-12 text-xl">
               <li>
                  <button className="flex items-center justify-center">
                     <RiHome4Line className="size-5" />
                     Home
                  </button>
               </li>
               <li>
                  <button className="flex items-center justify-center">
                     <IoPersonCircleOutline className="size-5"/>
                     About
                  </button>
               </li>
               <li>
                  <button className="flex items-center justify-center">
                     <GoProjectSymlink className="size-5"/>
                     Projects
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   )
}
export default Header;