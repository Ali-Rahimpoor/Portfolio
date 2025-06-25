import img_me from "../../src/assets/img/me.jpg";
import {motion} from 'framer-motion';
import { Link } from 'react-router';
import { FaCode } from "react-icons/fa6";
export default function Home() {
  return (
   <main className="flex sm:flex-row flex-col justify-around md:w-[760px] lg:w-[900px] font-Tinos mx-auto">
      <div className="flex items-center justify-center">
        <div className="">
        <motion.h1  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="text-4xl font-Tinos-Bold">Hi, im Ali</motion.h1>
        <motion.h2  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }} className="my-1 text-gray-400">junior FrontEnd Developer</motion.h2>
        <motion.p   initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}>.....</motion.p>
        <motion.div  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}  className="my-10 font-Karla flex items-center justify-between gap-x-6">
                    <Link to={'/projects'}>
          <button className="bg-blue-400 p-2 rounded hover:scale-110 transition-transform">
             View My Work
          </button></Link>
          <Link to={'/about'}>
          <button className="p-2 rounded border border-gray-300 hover:scale-110 transition-transform hover:bg-zinc-800">
             About Me
          </button></Link>
          </motion.div>
        </div>
      </div>

      <motion.div  initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }} className="relative">
            <div className="w-60 h-60 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-zinc-500/30 mb-6 hover:scale-105 transition-transform">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-full" src={img_me} alt="" />
                      </div>
              </div>
              <FaCode className="sm:size-20 size-15 p-3 sm:p-5 absolute -z-10 bottom-1 right-1 border-4 rounded-full  border-zinc-500/30 text-white"/>
      </motion.div>
   </main>
  );
}
