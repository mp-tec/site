import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects/inex";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />

    <main className="flex flex-col p-10 md:px-60 px-2">
      <h2 className="text-gray-200 text-4xl">A sua empresa de tecnologia</h2>
      <p className="text-gray-200 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate nemo aliquam accusamus hic. A accusamus et culpa. Quos impedit quia maxime dignissimos ullam blanditiis consectetur fugit adipisci eveniet similique!</p>
    </main>

    <Projects />

    <Footer />
    </div>
  )
}
