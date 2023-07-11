import Link from "next/link"

export default function Plans() {
    return (
        <div className="lg:flex lg:space-x-24 space-x-40 justify-center items-center lg:mt-64 mt-36 pb-20">
            <Link href="https://wa.me/5555991077852/?text=Olá,tenho interesse em comprar o pack de sites STARTER!" target='blank'>
                <div className="bg-gradient-to-r border-2 from-indigo-500 mb-10 to-zinc-600 w-96 px-5 rounded-md h-[22rem] space-y-4 font-semibold hover:animate-pulse">
                <div className="-mt-10 bg-zinc-800 rounded-full flex items-center justify-center py-2 ">
                    <p className="text-white text-3xl font-bold">STARTER</p>
                </div>
                    <p className="text-zinc-200">🔘 Orçamento Grátis</p>
                    <p className="text-zinc-200">🔘 Design</p>
                    <p className="text-zinc-200">🔘 Criação de Landing Page (site simples)</p>
                    <p className="text-zinc-200">🔘 Publicação online</p>
                    <p className="text-zinc-200">🔘 Manutenção (opcional - taxa mensal)</p>
                </div>
            </Link>

            <Link href="https://wa.me/5555991077852/?text=Olá,tenho interesse em comprar o pack de sites PRO!" target='blank'>
            <div className="hover:bg-violet-400 border-2 w-96 px-5 mb-10 bg-gradient-to-l from-cyan-400 to-blue-600 rounded-md h-[22rem] space-y-3 font-semibold hover:animate-pulse">
                <div className="-mt-10 bg-zinc-800 rounded-full flex items-center justify-center py-2 ">
                    <p className="text-white text-3xl font-bold">PRO</p>
                </div>
                <p className="text-zinc-200">🔘 Orçamento Grátis</p>
                <p className="text-zinc-200">🔘 Design</p>
                <p className="text-zinc-200">🔘 Criação do site</p>
                <p className="text-zinc-200">🔘 Publicação online</p>              
                <p className="text-zinc-200">🔘 Melhores tecnologias</p>
                <p className="text-zinc-200">🔘 Melhor velocidade de navegação</p>
                <p className="text-zinc-200">🔘 Manutenção (opcional - taxa mensal)</p>
            </div>
            </Link>

            <Link href="https://wa.me/5555991077852/?text=Olá,tenho interesse em comprar o pack de sites PREMIUM!" target='blank'>
            <div className="bg-gradient-to-r border-2 from-purple-400 mb-10 to-pink-600 w-96 px-5 rounded-md h-[22rem] space-y-3 font-semibold hover:animate-pulse">
                <div className="-mt-10 bg-zinc-800 rounded-full flex items-center justify-center py-2 ">
                    <p className="text-white text-3xl font-bold">PREMIUM</p>
                </div>
                <p className="text-zinc-200">🔘 Orçamento Grátis</p>
                <p className="text-zinc-200">🔘 Design</p>
                <p className="text-zinc-200">🔘 Criação do site <strong>complexo</strong></p>
                <p className="text-zinc-200">🔘 Publicação online</p>
                <p className="text-zinc-200">🔘 Melhores tecnologias</p>
                <p className="text-zinc-200">🔘 Melhor velocidade de navegação</p>
                <p className="text-zinc-200">🔘 Logins, adição no carrinho</p>
                <p className="text-zinc-200">🔘 Responsividade e Acessibilidade</p>
                <p className="text-zinc-200">🔘 Manutenção (opcional - taxa mensal)</p>
            </div>
            </Link>
        </div>
    )
}
