import { HERO } from "../constants"
import carlImg from "../assets/Santhosh.png"
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
        <div className="w-full md:w-1/2">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[6rem]">
            {HERO.name}
        </h2>
        
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
            {HERO.description}
        </p>

        {/* Profile Links Centered with Labels */}
        <div className="p-2 mb-6 flex justify-center gap-10">
            {/* LeetCode */}
            <a
               href="https://leetcode.com/u/santhoshnaik218/"
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center hover:text-yellow-400 transition"
            >
                <img
                   src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                   alt="LeetCode"
                   className="h-12 w-12 object-contain hover:scale-105 transition-transform duration-200"
                />
                <span className="mt-1 text-sm font-medium">LeetCode Profile</span>
            </a>

            {/* GFG */}
            <a
               href="https://www.geeksforgeeks.org/user/santhoshacme/"
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center hover:text-green-500 transition"
            > 
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                  alt="GeeksforGeeks"
                  className="h-12 w-12 object-contain hover:scale-105 transition-transform duration-200"
                />
               <span className="mt-1 text-sm font-medium">GFG Profile</span>
            </a>

            {/* Resume */}
            <a
               href="https://drive.google.com/file/d/1vQKCslQuMG-ZS23LfzWRG0cduw5fNJi4/view?usp=drive_link"
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center hover:text-blue-500 transition"
            >

                <img
                   src="https://img.icons8.com/color/48/000000/resume.png"
                   alt="Resume"
                   className="h-12 w-12 object-contain hover:scale-105 transition-transform duration-200"
                />
                <span className="mt-1 text-sm font-medium">Resume</span>
            </a>

        </div>

        </div>
        <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img src={carlImg} width={450} height={450} alt="Santhosh Naik" className="rounded-3xl" />
        </div>
        </div>
    </section>
  )
}

export default Hero;
