import { ButtonHome } from "./components/ButtonHome";
import { Designs } from "./components/Designs";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="pb-20">
    <main className="flex flex-col p-10 md:px-52 px-2 pl-4 mt-5">
      <h2 className="text-gray-200 text-5xl font-semibold">A sua empresa de tecnologia</h2>
      <p className="text-gray-200 mt-4 text-xl">Precisando de um site para tornar sua empresa mais profissional e   elegante?  <br></br> <strong className="text-gray-200 text-xl">Nos temos a Solução!</strong>
      </p> 
      
      <br />
      <p className="text-gray-200 mt-4 text-xl">Faça seu orçamento <strong>GRÁTIS</strong>, e de um <span className="font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">UPGRADE</span> na sua empresa / negócio.</p>
    </main>

    <ButtonHome />

    <span className="text-gray-200 text-2xl md:px-52 px-4">
      Alguns de nossos sites:
    </span>
    <Projects />

    <span className="text-gray-200 text-2xl md:px-52 px-4">
      Alguns de nossos designs:
    </span>
    <Designs />
    </div>
    </div>
  )
}
