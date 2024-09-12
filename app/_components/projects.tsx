import {Button} from "@/components/ui/button";
import {Eye} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projetos"
      className="flex flex-col items-center md:lg:p-80 justify-center md:lg:mt-0 md:lg:pb-0 mt-32 pb-32"
    >
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-purple-600 font-semibold">
        Projetos
      </h1>
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-5">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col items-center border rounded-lg justify-center cursor-pointer hover:bg-zinc-600 bg-zinc-800 p-5"
        >
          <h1 className="pb-5">Cardápio Simples</h1>
          <Image
            src="/hamburgueria.png"
            alt="Projeto Cardápio"
            width={200}
            height={200}
            className="border rounded-lg"
          />
          <p className="text-gray-400 text-sm mt-3">
            Landing Page de Cardápio para <br /> pedidos rápidos, praticos e
            simples.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            HTML - CSS - JavaScript - Tailwindcss
          </p>

          <Button variant="outline" className="mt-8">
            <Link href="https://cardapio-nbc.vercel.app/" target="_blank">
              <Eye />
            </Link>
          </Button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center border rounded-lg justify-center cursor-pointer hover:bg-zinc-600 bg-zinc-800 p-5"
        >
          <h1 className="pb-5">Cardápio Simples</h1>
          <Image
            src="/tocador.png"
            alt="Projeto Cardápio"
            width={200}
            height={200}
            className="border rounded-lg"
          />
          <p className="text-gray-400 text-sm mt-3">
            Tocador de som podendo reproduzir e <br /> escutar peritamente todas
            as faixas.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            HTML - CSS - JavaScript - Tailwindcss
          </p>

          <Button variant="outline" className="mt-8">
            <Link href="https://tocador-som.vercel.app/" target="_blank">
              <Eye />
            </Link>
          </Button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col items-center border rounded-lg justify-center cursor-pointer hover:bg-zinc-600 bg-zinc-800 p-5"
        >
          <h1 className="pb-5">Todo List</h1>
          <Image
            src="/todolist.png"
            alt="Projeto Cardápio"
            width={200}
            height={200}
            className="border rounded-lg"
          />
          <p className="text-gray-400 text-sm mt-3">
            Sistema usado para gerenciar tarefas <br /> podendo excluir ou
            marcar como feita.
          </p>
          <p className="text-gray-400 text-sm mt-3">React - CSS</p>

          <Button variant="outline" className="mt-8">
            <Link href="https://todolist-cbs7.vercel.app/" target="_blank">
              <Eye />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
