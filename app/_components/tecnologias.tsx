"use client";
import IconCloud from "@/components/magicui/icon-cloud";
import React from "react";

const slugs = [
  "typescript",
  "javascript",

  "react",

  "html5",
  "css3",

  "prisma",
  "postgresql",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

const Tecnologias = () => {
  const [, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      id="tecnologias"
      className="bg-zinc-800 md:lg:p-80 flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5 md:lg:mb-0 text-purple-600 font-semibold flex text-center pt-10 md:lg:pt-0 ">
        Tecnologias
      </h1>
      <div
        data-aos-duration="1000"
        data-aos="fade-right"
        className="flex flex-col md:flex-row md:gap-40 items-center "
      >
        <div className="w-44 md:w-56 lg:w-80 pt-16">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
