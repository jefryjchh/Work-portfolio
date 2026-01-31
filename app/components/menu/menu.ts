
import { FaHome, FaAddressCard,  } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

export const Menu =[
    {
        id:1,
        url: '/',
        label: 'Inicio',
        icon: FaHome,
    },
    {
        id:2,
        url: '/pages/resumen',
        label: 'Resumen',
        icon: FaAddressCard,
    },
    {
        id:3,
        url: '/pages/proyectos',
        label: 'Proyectos',
        icon: BsFillBriefcaseFill,
    },
    {
        id:5,
        url: '/pages/contacto',
        label: 'Contacto',
        icon: IoMdContact,
    }
]