import Image from "next/image";
const img_Url = "/assets/img/me.jpg"
export default function Home() {
  return (
   <main className="flex font-Tinos">
      <div>
        <h1>Hi, i'm Ali</h1>
        <h2>junior FrontEnd Developer</h2>
        <p>.....</p>
        <div>
          <button>
             View My Work
          </button>
          <button>
             About Me
          </button>
        </div>
      </div>

      <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden mb-6">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img className="w-full h-full" src={img_Url} alt="" />
                      </div>
                    </div>
      </div>
   </main>
  );
}
