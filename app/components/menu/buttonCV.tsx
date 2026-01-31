"use client"

import { FiDownload } from "react-icons/fi";

export default function ButtonCV () {
    return (
        <a
          href="/cv/curriculum-vitae.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-600 rounded-xl transition-colors duration-300"
        >
          <div className="flex gap-4 py-2 px-5 text-white items-center">
            <FiDownload className="h-5 w-5 lg:h-7 lg:w-7" />
            <p className="text-[14px] lg:text-base">
              Descargar CV
            </p>
          </div>
        </a>
    )
}