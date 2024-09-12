import {ArrowBigUp} from "lucide-react";
import About from "./_components/about";
import Apresentation from "./_components/apresentation";
import Header from "./_components/header";
import Projects from "./_components/projects";
import Tecnologias from "./_components/tecnologias";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Apresentation />
      <About />
      <Projects />
      <Tecnologias />
      <a href="#apresentation">
        <div className="fixed justify-end right-5 rounded-full bottom-8 bg-purple-600 cursor-pointer p-4">
          <ArrowBigUp className="flex items-center" />
        </div>
      </a>
    </div>
  );
}
