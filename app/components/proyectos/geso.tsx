"use client"

import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import { GrFormNext } from "react-icons/gr";

export default function Geso () {
    return (
        <div data-aos="zoom-in-right" className="mb-6 ">
            <Image
                src="/images/geso.webp"
                alt="Proyecto1"
                width={700}
                height={620}
                className="rounded-2xl mb-2"
            />
            <div className="flex flex-col items-start justify-start">
                <div className="flex pt-3">
                    <h2 className="text-white text-2xl md:text-3xl font-bold pt-2">Fundación Género y Sociedad</h2>                                     
                </div>
                
                
                <h3 className="text-white text-xl md:text-2xl font-medium py-3">Next.js - React</h3>
                <p className="text-gray-300 text-base md:text-xl font-medium pb-1">Sitio web creado durante pasantía y en 
                    colaboración con la empresa <Link href="https://aacrom.com/" 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="underline">
                                    AACROM
                                </Link>
                    .
                </p>
                <div className="flex items-start pt-3">
                    <Link
                        href="https://geso-app.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"                 
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className=" flex items-center justify-center rounded-2xl bg-[#5B1780] group "
                        >
                            <div className=" flex items-center justify-center">
                                <Image
                                    src="/images/logoGESO.png"
                                    alt="Proyecto1"
                                    width={40}
                                    height={40}
                                    className="rounded-lg ml-5"
                                />
                            </div>
                            <div className="flex text-white py-4 pl-5 px-3 gap-3">
                                <p>Ver web GESO</p>
                                <GrFormNext className="w-7 h-7"/>
                            </div>
                            
                        </motion.div>                    
                    </Link>
                </div>
            </div>
        </div>
    )
}