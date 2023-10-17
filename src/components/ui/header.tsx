"use client";

import {
  MenuIcon,
  ShoppingCart,
  LogInIcon,
  BadgePercent,
  ListOrdered,
  Home,
  LogOutIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };
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

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-8 py-4	">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && (
                    <AvatarImage
                      src={data.user.image}
                      className="rounded-full"
                    />
                  )}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-2 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full gap-2"
              >
                <LogInIcon />
                Fazer Login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full gap-2"
              >
                <LogOutIcon />
                Fazer Logout
              </Button>
            )}
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
