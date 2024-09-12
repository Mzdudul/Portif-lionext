"use client";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import {Button} from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
import {useEffect} from "react";

const Apresentation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center gap-32 justify-center mt-96 lg:flex-row">
      <div className="flex flex-col items-center lg:flex lg:items-start mb-20">
        <GradualSpacing
          className="text-purple-600 text-lg justify-start font-medium"
          text="HELLO WORLD!"
        />
        <GradualSpacing
          className="text-4xl md:text-6xl"
          text="Eu sou Eduardo,"
        />

        <GradualSpacing
          className="text-gray-400 text-lg md:text-xl"
          text="Desenvolvedor Web Front-end."
        />
        <Button
          data-aos="fade-right"
          variant="outline"
          className="border-solid border-purple-600 h-9 mt-4"
        >
          <p className="text-purple-500">Fale Comigo!</p>
        </Button>
      </div>
      <div className="mb-20">
        <Image
          data-aos="fade-right"
          src="./desktop.svg"
          alt="desktop"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Apresentation;
