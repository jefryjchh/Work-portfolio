"use client"

interface EstudioProps{
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    aos?: string;
    aosDelay?: number;
}


export default function Estudio ({date, title, description, icon, aos = "fade-right", aosDelay = 0, }: EstudioProps ) {

    return (
        <main
            data-aos={aos}
            data-aos-delay={aosDelay}
            className="mx-auto flex flex-col ">

            <article className="w-full max-w-[680px] h-full bg-[#14134145] rounded-xl">
                <div className="flex flex-row justify-between sm:p-7 p-3 gap-6">

                {/* Ícono */}
                <div className="sm:w-16 sm:h-16 w-13 h-13 rounded-full bg-purple-500 flex items-center justify-center shrink-0 ">   
                    {icon}   
                </div>

                {/* Contenido */}
                <div className="flex flex-col text-white gap-4 flex-1 min-w-0">
                    <p className="rounded-[20px] bg-gray-300 text-gray-800 px-5 py-1.5 md:text-lg text-base font-medium w-fit">
                    {date}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold">
                    {title}
                    </h3>

                    <p className="text-base md:text-xl">
                    {description}
                    </p>
                </div>

                </div>
            </article>
        </main>
    );
}