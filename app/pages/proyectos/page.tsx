"use client"


import ParticlesBackgroundStars from "@/app/components/proyectos/particlesStar";
import Geso from "@/app/components/proyectos/geso";


export default function Proyectos () {
    return (
        <main className="mx-auto max-w-[1420px] py-20 px-2 sm:px-6">

            <ParticlesBackgroundStars />
            
            <h1 className="text-2xl md:text-[40px] font-bold text-white my-10 text-center">Proyectos</h1>

            <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-8 lg:grid-cols-2 lg:items-start">

                <Geso/>
    
            </div>
  
        </main>
    );
}