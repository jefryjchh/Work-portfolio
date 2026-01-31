"use client"

import Tilt from 'react-parallax-tilt'
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const skills =[
    {
        icon: <SiJavascript/>,
        name: 'Javascript',
        duration: 1000,
    },
    {
        icon: <FaReact/>,
        name: 'React.js',
        duration: 1200,
    },
    {
        icon: <SiNextdotjs/>,
        name: 'Next.js',
        duration: 1400,
    },
    {
        icon: <FaNodeJs/>,
        name: 'Node.js',
        duration: 1600,
    },
    {
        icon: <RiTailwindCssFill/>,
        name: 'Tailwind CSS',
        duration: 1800,
    },
    {
        icon: <SiTypescript/>,
        name: 'TypeScript',
        duration: 2000,
    },
]

export default function Skills () {
    return (
        <main className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skil)=>(
                <Tilt 
                    key={skil.name}
                    scale={1.5}
                    transitionSpeed={400}
                    
                    >
                        <div data-aos="flip-left"
                            data-aos-duration={skil.duration}
                            data-aos-delay={700}
                            className='bg-[#14134145] text-center w-40 h-44 rounded-3xl flex flex-col items-center 
                            justify-center shadow-lg transition duration-300 hover:scale-120'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {skil.icon}
                            </div>
                            <p className='text-purple-400 mt-1'>{skil.name}</p>

                        </div>
                </Tilt>
            ))}
        </main>
    )
}