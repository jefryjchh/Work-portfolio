"use client"

import Link from "next/link"
import { ImCross } from "react-icons/im"
import { Menu } from "./menu"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Fondo blur */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        
          onClick={onClose}
        />

      {/* Panel */}
      <aside className={`fixed top-0 right-0 z-50 h-screen w-3/4
            bg-[radial-gradient(circle_at_20%_25%,#4b5563_0%,#1f2937_35%,#020617_75%)]
            transform transition-transform duration-400 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
       > 
        {/* bg-[radial-gradient(circle_at_20%_25%,#4b5563_0%,#1f2937_35%,#020617_75%)] Azul-azul claro*/}
        {/* bg-[radial-gradient(circle_at_20%_25%,#162456_0%,#0b0e57_35%,#0d0d1f_75%)] Negro-blanco*/}
        {/* Botón cerrar */}
        <div className="flex justify-end p-6 z-40">
          <button onClick={onClose} aria-label="Cerrar menú">
            <ImCross className="text-white text-3xl" />
          </button>
        </div>

        

        {/* Links */}
        <nav className="flex h-full -mt-20 items-center justify-center">
            <ul className="flex flex-col gap-12">
                {Menu.map((item) => {
                const Icon = item.icon

                return (
                    <li key={item.id}>
                    <Link
                        href={item.url}
                        onClick={onClose}
                        className="
                        flex items-center gap-4
                        text-white text-xl font-medium
                        hover:text-cyan-300 transition-colors
                        "
                    >
                        <Icon className="text-3xl "/>
                        <span>{item.label}</span>
                    </Link>
                    </li>
                )
                })}
            </ul>
        </nav>
      </aside>
    </>
  )
}

export default MobileMenu