import {
  MenuIcon,
  ShoppingCart,
  LogInIcon,
  BadgePercent,
  ListOrdered,
  Home,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.8rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button variant="outline" className="w-full gap-2">
              <LogInIcon />
              Fazer Login
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Home />
              Início
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <BadgePercent />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <ListOrdered />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold ">
        <span className="text-primary">AllisonDev</span>Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
