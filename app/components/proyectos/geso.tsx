"use client"

import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Geso () {
    return (
        <div data-aos="zoom-in-right" className="mb-6 ">
            <Image
                src="/images/geso.webp"
                alt="Proyecto1"
                width={700}
                height={620}
                className="rounded-lg mb-2"
            />
    
            <div className="flex flex-row pt-3">
                <h2 className="text-white text-2xl md:text-3xl font-bold pt-2">Fundación Género y Sociedad</h2>

                <div className="pl-6 sm:pl-10 mt-1">
                    <Link
                        href="https://geso-app.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"                 
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className=" flex items-center justify-center rounded-4xl bg-[#5B1780] group "
                        >
                            <div className="py-3 pl-5">
                                    <Image 
                                        src="/images/logoGESO.png" 
                                        alt="GESO icon image"
                                        width={200}
                                        height={200}
                                        priority
                                        className="min-w-8 min-h-8 w-8 h-8" 
                                    />
                                </div>
                            
                            <p className="pr-5 pl-3 text-white group-hover:text-[#FFD11A] transition-colors duration-300 "
                            >
                                GESO
                            </p>
                        </motion.div>                    
                    </Link>
                </div>    
                                        
            </div>
            
            <h3 className="text-white text-xl md:text-2xl font-medium py-3">Next.js - React</h3>
            <p className="text-gray-300 text-base md:text-xl font-medium">Sitio web creado durante pasantía y en 
                colaboración con la empresa <Link href="https://aacrom.com/" 
                                target="_blank" rel="noopener noreferrer" 
                                className="underline">
                                AACROM
                            </Link>
                .
            </p>
            {/*<div className="flex flex-col items-center justify-center">
                    <Link
                        href="https://geso-app.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"                 
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className=" flex items-center justify-center rounded-4xl bg-[#5B1780] group "
                        >
                            <div className="p-3">
                                    <Image 
                                        src="/images/logoGESO.png" 
                                        alt="GESO icon image"
                                        width={200}
                                        height={200}
                                        priority
                                        className="min-w-8 min-h-8 w-8 h-8" 
                                    />
                                </div>
                            
                            <p className="pr-4 text-white group-hover:text-[#FFD11A] transition-colors 
                                duration-300 "
                            >
                                Ver sitio web GESO
                            </p>
                        </motion.div>                    
                    </Link>
                </div> 
                */}     
        </div>
    )
}