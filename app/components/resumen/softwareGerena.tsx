"use client"

import Tilt from 'react-parallax-tilt'

import { SiRstudioide } from "react-icons/si";
import { SiArcgis } from "react-icons/si";
import { SiQgis } from "react-icons/si";

const skills =[
    {
        icon: <SiRstudioide/>,
        name: 'RStudio',
    },
    {
        icon: <SiArcgis/>,
        name: 'ArcGis',
    },
    {
        icon: <SiQgis/>,
        name: 'QGIS',
    }

]

export default function SoftwareGerena () {
    return (
        <main className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skil)=>{
                return <Tilt 
                    key={skil.name}
                    scale={1.5}
                    transitionSpeed={400}
                    >
                        <div className='bg-[#14134145] text-center w-40 h-44 rounded-3xl flex flex-col items-center 
                          justify-center shadow-lg transition duration-300 hover:scale-120'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {skil.icon}
                            </div>
                            <p className='text-purple-400 mt-1'>{skil.name}</p>

                        </div>
                </Tilt>
            })}
        </main>
    )
}