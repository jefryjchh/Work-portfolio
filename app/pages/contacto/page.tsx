"use client"

import { MdOutlineEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from "@/app/components/contacto/formulario";

export default function Contacto () {
    
    return (
        
        <main className="py-25 lg:py-39 px-2">

            <div className="max-w-[1420px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
                
                {/* texto */}
                <div className="text-center lg:text-left md:mx-auto ">
                    <h1 className="md:text-[40px] text-left text-2xl font-bold text-white my-10">
                        Para más información contácteme.
                    </h1>
                    <p className="text-gray-300 text-left text-base md:text-xl font-medium">
                        Será un placer ayudarle a hacer realidad sus proyectos web.
                    </p>
                    <div className="flex space-x-4 my-8">
                        <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-cyan-300" />
                        <p className="text-gray-300 text-base md:text-xl font-bold pt-1">+50663309494</p>
                    </div>
                    <div className="flex space-x-4 my-8">
                        <MdOutlineEmail className="w-8 h-8 md:w-10 md:h-10 text-cyan-300" />
                        <p className="text-gray-300 text-base md:text-xl font-bold pt-1">jefrychavesh@hotmail.es</p>
                    </div>
                    <div className="flex space-x-4 my-8">
                        <BiMap className="w-8 h-8 md:w-10 md:h-10 text-cyan-300" />
                        <p className="text-gray-300 text-base md:text-xl font-bold pt-1">San Ramón, Costa Rica.</p>
                    </div>

                </div>

                {/* formulario */}

                <ContactForm/>

            </div>
        </main>            
        
    );
}