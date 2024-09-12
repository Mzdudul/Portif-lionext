import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Sheet, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card id="apresentation">
      <CardContent className="flex p-5 justify-between">
        <h1 className="flex items-center font-medium">
          Eduardo Gonçalves |{" "}
          <p className="ml-1.5 text-purple-600 font-bold">Dev</p>.
        </h1>

        <div className=" hidden items-center lg:flex">
          <a
            href="#apresentation"
            className="pr-5 hover:text-purple-600  hover:transition hover:duration-500  "
          >
            Inicío
          </a>
          <a
            href="#about"
            className="pr-5 hover:text-purple-600  hover:transition hover:duration-500 "
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="pr-5 hover:text-purple-600  hover:transition hover:duration-500 "
          >
            Projetos
          </a>
          <a
            href="#tecnologias"
            className="pr-5 hover:text-purple-600  hover:transition hover:duration-500 "
          >
            Tecnologias
          </a>
          <a
            href="#contato"
            className="pr-5 hover:text-purple-600  hover:transition hover:duration-500 "
          >
            Contato
          </a>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:lg:hidden">
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
