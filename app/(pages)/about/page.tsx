"use client"
import {motion} from "framer-motion"
import { FaGithub } from "react-icons/fa6"
import { CgMail } from "react-icons/cg"
import SkillBar from "@/app/components/Skillbar"
const img_Url = "/assets/img/about.jpg"
const About = ()=>{

    const skills = [
    { name: "JavaScript", level: 50 },
    { name: "TypeScript", level: 35 },
    { name: "React", level: 55 },
    { name: "Next.js", level: 35 },
    { name: "Redux", level: 60 },
    { name: "Unity / C#", level: 35 },
    { name: "HTML & CSS", level: 60 },
    { name: "Tailwind CSS", level: 65 },
  ];

   return (
      <main className="w-[900px] font-Tinos mx-auto">
          <motion.h1 className="font-Tinos-Bold text-center mb-15 text-6xl" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}>
         About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
      </motion.h1>
         <div className="flex justify-between p-1">
         <div>
            <motion.div  initial={{ opacity: 0, scale: 0.9 , y:-20 }}
                            animate={{ opacity: 1, scale: 1, y:0, transition: { delay: 0.6 } }} className="relative">
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-zinc-500/30 mb-6">
                                  {/* Placeholder for profile image */}
                                  <div className="w-full h-full flex items-center justify-center">
                                    <img className="w-full h-full" src={img_Url} alt="" />
                                  </div>
                          </div>
                          <div className="flex justify-center gap-x-10">
                           <FaGithub size={23} className="hover:scale-110 transition-transform" />
                          <CgMail size={23} className="hover:scale-110 transition-transform"/>
                        </div>
                  </motion.div>
         </div>
         <motion.div initial={{opacity:0,}} animate={{opacity:1 ,transition: { delay: 0.3 }}} className="w-140 h-70 overflow-y-scroll custom-scrollbar">
         <motion.p initial={{opacity:0,x:-30}} animate={{opacity:1,x:0,}}>
            I'm a passionate <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">Front-End Developer</span> and Indie <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">Game Developer</span> with hands-on experience building interactive web applications and games. I specialize in modern <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">JavaScript</span> technologies such as <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent block">"React , TypeScript , Next.js , and Redux , crafting clean, responsive, and user-friendly interfaces."</span> 
         </motion.p>
           <motion.p initial={{opacity:0,x:-30}} animate={{opacity:1,x:0,}}>
            Alongside web development, I've explored game development using Unity and C# , where I’ve created small indie games and experimented with gameplay mechanics, animations, and UI systems. These personal projects reflect my creativity, problem-solving mindset, and love for interactive experiences.
         </motion.p>
          <motion.p initial={{opacity:0,x:-30}} animate={{opacity:1,x:0,}}>
            As someone eager to grow and contribute, I'm currently looking for <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">opportunities</span> to join a dynamic team — whether through an internship , <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">junior developer</span> role , or freelance collaborations. My goal is to further develop my skills, work on meaningful projects, and become a valuable part of a forward-thinking development team.
         </motion.p>
         <motion.p initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}>
            If you're looking for a <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">motivated and enthusiastic</span> developer who loves learning and building, feel free to reach out!
         </motion.p>
            <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} className="flex items-center gap-x-1">
               <CgMail/>
               <span>Contact: </span>
               <span> ali.rahimpoor.ar@gmail.com</span>
            </motion.div>
         </motion.div>
         </div>

         <div>
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0,transition: { delay: 1 } }}
  transition={{ duration: 0.5 }}
  className="mt-10"
>
     <h1 className="text-center text-4xl">
               Technical Skills
            </h1>
               {skills.map((skill) => (
  <SkillBar skill={skill.name} percentage={skill.level} />
      ))}
      </motion.div>
         </div>
      </main>
   )
}
export default About;