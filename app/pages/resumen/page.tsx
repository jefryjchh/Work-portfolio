"use client"

import Estudio from "@/app/components/resumen/estudio";
import Skills from "@/app/components/resumen/skills";
// import SoftwareGerena from "@/app/components/resumen/softwareGerena";
import { IoSchool } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";


export default function Resumen () {
    return (
        <main className=" my-30 mx-auto max-w-[1420px] md:px-10 px-2 ">

            <h2 className="md:text-[40px] text-2xl font-bold text-white my-10 text-center">Estudios</h2>

            <div className="flex flex-col xl:flex-row items-stretch gap-8">
                <Estudio 
                    
                    date={"Diciembre - 2026"} 
                    title={"Técnico en Desarrollo web"} 
                    description={"Curso en proceso, llevado en CINDEA La Paz, San Ramón, Costa Rica."}
                    icon={<TbWorld className="sm:w-9 sm:h-9 w-8 h-8 text-white" />}
                />

                <Estudio 
                    aosDelay={150}
                    date={"Abril - 2025"} 
                    title={"Bachillerato en Gestión de los Recursos Naturales"} 
                    description={"Carrera llevada en la Universidad de Costa Rica, Sede de Occidente."}
                    icon={<IoSchool className="sm:w-9 sm:h-9 w-8 h-8 text-white" />}
                />
            </div>

            <h1 className="md:text-[40px] text-2xl font-bold text-white my-10 text-center">Habilidades</h1>

            <Skills/>

            {/* 
                <h2 className="text-[40px] font-bold text-white my-10 text-center">Software <span className="text-green-700">
                    Gestión de los recursos naturales</span> </h2>

                <SoftwareGerena/>
            */}

        </main>
    );
}