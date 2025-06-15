const Header = ()=>{

   return(
      <header className="font-Karla">
         <nav className="container flex justify-between px-10 pt-2">
            <h1>Ali <span>Developer</span></h1>
            <ul className="flex">
               <li>
                  <button>
                     Home
                  </button>
               </li>
               <li>
                  <button>
                     About
                  </button>
               </li>
               <li>
                  <button>
                     Projects
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   )
}
export default Header;