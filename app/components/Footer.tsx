import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
const Footer = ()=>{

   return(
      <footer className="flex sm:flex-row flex-col items-center text-xs border-t p-3 border-t-gray-700 justify-between font-Karla sm:px-13">
         <h1>© 2025 Ali Rahimpoor. All rights reserved.</h1>
         <div className="flex items-center justify-between gap-x-2">
         <FaGithub className="sm:size-8 size-5" />
         <CgMail className="sm:size-8 size-5"/>
         </div>
      </footer>
   )
}
export default Footer;