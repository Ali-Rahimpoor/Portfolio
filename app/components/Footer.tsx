import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
const Footer = ()=>{

   return(
      <footer className="flex items-center border-t p-3 border-t-gray-700 justify-between font-Karla px-13">
         <h1>© 2025 Alex Developer. All rights reserved.</h1>
         <div className="flex items-center justify-between gap-x-2">
         <FaGithub size={30} />
         <CgMail size={30}/>
         </div>
      </footer>
   )
}
export default Footer;