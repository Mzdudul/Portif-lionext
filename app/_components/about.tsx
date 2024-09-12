import Image from "next/image";

const About = async () => {
  return (
    <div
      className="flex flex-col items-center p-20 md:lg:p-80 bg-zinc-800 gap-32 justify-center mt-72 lg:flex-row"
      id="about"
    >
      <div>
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          src="/profile.jpg"
          alt="desktop"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex flex-col "
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5 text-purple-600 font-semibold">
          Sobre mim
        </h1>
        <p className="text-gray-300">
          Meu nome é Eduardo Gonçalves, sou desenvolvedor Front-end <br />
          especializado na criação de páginas e sistemas web responsivos <br />{" "}
          com design atrativo e funcional. Ao longo da minha trajetória,
          <br />
          desenvolvi uma forte dedicação ao trabalho e habilidades <br />
          organizacionais que me permitem entregar projetos de <br /> alta
          qualidade dentro dos prazos estabelecidos. <br /> Atualmente, estou
          imerso em um processo de aprendizado contínuo, <br /> com foco em
          tecnologias JavaScript, que me permitem acompanhar <br /> as melhores
          práticas e inovações da área. <br /> Estou em busca de novas
          oportunidades no mercado para contribuir <br /> com meu conhecimento
          e, <br /> ao mesmo tempo, expandir minhas habilidades com o objetivo
          de, <br /> no futuro próximo, me tornar um desenvolvedor Full Stack.
        </p>
      </div>
    </div>
  );
};

export default About;
