"use client"

import { motion } from "framer-motion"
import Navbar from "./navbar"
import NavMobile from "./navMobile"
import { FaCode } from "react-icons/fa6";
import ButtonCV from "./buttonCV";

export default function BarHeader() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-20
                 bg-white/8 backdrop-blur-sm
                 lg:px-6 lg:py-2
                 z-50 px-3 "
    >
      <div className="flex items-center h-full justify-between w-full max-w-[1920px] mx-auto">
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5" />
            
          </div>
          <h2 className="text-xl hidden sm:block med:text-2xl text-white font-medium ">Jeffry</h2>
        </div>

        <Navbar/>

        <ButtonCV/>

        <NavMobile/>
      </div>
    </motion.div>
  )
}