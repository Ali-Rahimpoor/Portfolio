import Image from "next/image";
const img_Url = "/assets/img/me.jpg"
import { FaReact } from "react-icons/fa6";
export default function Home() {
  return (
   <main className="flex justify-around w-[900px] font-Tinos mx-auto">
      <div className="flex items-center justify-center">
        <div className="">
        <h1 className="text-4xl font-Tinos-Bold">Hi, i'm Ali</h1>
        <h2 className="my-1 text-gray-400">junior FrontEnd Developer</h2>
        <p>.....</p>
        <div className="mt-10 font-Karla flex items-center justify-between gap-x-6">
          <button className="bg-blue-400 p-2 rounded">
             View My Work
          </button>
          <button className="p-2 rounded border border-gray-300">
             About Me
          </button>
          </div>
        </div>
      </div>

      <div className="relative">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden mb-6">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-full" src={img_Url} alt="" />
                      </div>
              </div>
              <div>
                        <FaReact className="size-15 absolute bottom-1 right-1 text-white"/>
                      </div>
      </div>
   </main>
  );
}
