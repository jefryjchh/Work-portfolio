"use client"

import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs";
import ParticlesBackground from "./components/home/particles";


export default function Home () {
    return (
        <main className=" relative h-screen items-center text-center justify-center flex flex-col overflow-hidden">
            
          <ParticlesBackground/>

          {/*Imagen */}
            <div data-aos="fade-up" 
                data-aos-duration="1100"
                className="items-center text-center justify-center flex flex-col overflow-hidden px-2">
                <div className="rounded-full w-[150px] h-[150px] border-8 border-[#131332] overflow-hidden mb-4">
                    <Image
                        src="/images/blanco y negro.webp"
                        alt="Personal image"
                        width={200}
                        height={200}
                        priority
                        className="object-cover w-full h-full"
                    />

                </div>

                <div className=" text-white w-full max-w-[650px] mx-auto">
                    <p className="my-4 md:text-4xl text-xl font-bold ">¡Hola, me llamo Jeffry!</p>
                    <p className="leading-snug md:text-3xl text-lg font-medium">Estoy especializándome en la creación de 
                    sitios web modernos y reactivos.</p>
                </div>
            </div>
          <div data-aos="zoom-in-up" data-aos-duration="1600" className="mt-9">
              <Link
                  href="/pages/proyectos"
                  className="
                  flex items-center justify-center font-medium
                  w-52.5 h-15
                  bg-blue-700 text-white hover:bg-blue-600
                  rounded-full md:text-lg text-base transition-colors duration-300 pointer-events-auto"
                >
                  Ver proyectos
                  
                  <BsArrowRight className="ml-3 w-6 h-6" />
                  
              </Link>
          </div>
                
            

        </main>
    )
}