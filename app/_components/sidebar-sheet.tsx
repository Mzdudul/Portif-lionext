import {Button} from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {CalendarIcon, HomeIcon} from "lucide-react";
import Link from "next/link";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/about">
              <CalendarIcon size={18} />
              Agendamentos
            </Link>
          </Button>
        </div>
      </SheetHeader>
    </SheetContent>
  );
};

export default SidebarSheet;
