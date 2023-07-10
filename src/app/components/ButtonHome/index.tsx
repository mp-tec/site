'use client'

import { useRouter } from "next/navigation"
import { ArrowRight } from "phosphor-react"

export function ButtonHome() {
    const router = useRouter()

    function handleGoToPage() {
        router.push("/plans")
    }

    return (
        <div className="md:px-52 pl-4 mb-20">
        <button onClick={handleGoToPage} className=" bg-violet-500 hover:bg-violet-600 hover:text-white rounded-md justify-center items-center flex p-4 font-bold gap-2 mb-10 transition-all duration-300">
            CONHEÇA NOSSOS PLANOS <ArrowRight size={22} weight="bold"/>
        </button>
        </div>
    )
}