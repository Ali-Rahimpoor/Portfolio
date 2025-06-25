import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router";
const Footer = ()=>{

   return(
      <footer className="flex sm:flex-row flex-col items-center text-sm sm:text-xs border-t p-3 border-t-gray-700 justify-between font-Karla sm:px-13">
         <h1>© 2025 Ali Rahimpoor. All rights reserved.</h1>
         <div className="flex items-center mt-2 sm:mt-0 justify-between gap-x-5">
         <Link to={'https://github.com/Ali-Rahimpoor'} target="_blank"><FaGithub className="sm:size-9 size-7" /></Link>
         <Link to={'mailto:ali.rahimpor.ar@gmail.com'}><CgMail className="sm:size-9 size-7"/></Link>
         </div>
      </footer>
   )
}
export default Footer;