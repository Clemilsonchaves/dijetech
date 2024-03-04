import { ContactIcon, FolderOpenDot, HomeIcon, LogInIcon, MenuIcon, ProjectorIcon, SearchIcon, User, Users } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";


const Header  = () => {
  return (
  
    <Card className="flex justify-between p-[1.875rem] rounded-none bg-amber-200 items-center border-none">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="bg-amber-200 hover:bg-amber-300 focus:ring focus:outline-none focus:ring-amber-200">
            <MenuIcon className="text-black"/>
          </Button> 
        </SheetTrigger>
        
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={16}/>
              Fazer Login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ContactIcon size={16} />
              Contato
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <FolderOpenDot size={16} />
              Projetos
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Users size={16} />
              Sobre nois
            </Button>
          </div>
          
        </SheetContent>
      </Sheet>
      
      <h1 className="text-black">DijeTech</h1>

      <Button size="icon" variant="outline" className="bg-amber-200  hover:bg-amber-300 focus:ring focus:outline-none focus:ring-amber-200">
        <SearchIcon className="text-black" />
      </Button>
    </Card>
      
  )

    
};

 
export default Header;