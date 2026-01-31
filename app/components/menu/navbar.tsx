"use client"

import Link from "next/link";
import { Menu } from "./menu";

export default function Navbar () {
    return (
        <nav className="flex items-center justify-between mx-auto">

            {/* menu */}
            <div className="hidden md:flex items-center gap-16">
                {Menu.map((link)=>{
                    return <Link 
                        key={link.id} 
                        href={link.url} 
                        className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200" 
                        >
                        {link.label}

                    </Link>
                })}

            </div>           
        </nav>

    );
}