"use client"

import { useState } from "react"
import { RiMenu3Line } from "react-icons/ri"
import MobileMenu from "./mobileMenu"

const NavMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="text-white text-4xl p-3 md:hidden"
      >
        <RiMenu3Line />
      </button>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default NavMobile