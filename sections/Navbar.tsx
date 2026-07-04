"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { useState } from "react";

const Page = () => {
  const { setTheme } = useTheme();
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className=" z-50 flex w-full items-center justify-between lg:flex-row p-5 lg:p-3 h-auto fixed top-0 left-0 right-0 bg-background border-b">
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="pointer-events-none">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="favicon"
            className="object-contain"
          />
        </Button>
      </div>

      <div className="flex text-lg font-bold lg:text-lg h-full items-center">
        <h1>PASSWORD MANAGER</h1>
      </div>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-lg border h-9 w-9 bg-background hover:bg-accent text-accent-foreground">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Page;
