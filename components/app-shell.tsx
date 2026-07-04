"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/sections/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const hiddenSidebarRoutes = ["/"];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showSidebar = !hiddenSidebarRoutes.includes(pathname ?? "");

  return (
    <>
      <Navbar />

      {showSidebar ? (
        <SidebarProvider>
          <AppSidebar />

          <main className="flex-1 flex flex-col relative">
            <div className="pt-20 pl-2 md:pt-17 absolute">
              <SidebarTrigger />
            </div>

            <div className="items-start mt-13 md:mt-10 justify-center">
              {children}
            </div>
          </main>
        </SidebarProvider>
      ) : (
        <main className="flex-1 flex flex-col">
          <div className="flex-1">{children}</div>
        </main>
      )}
    </>
  );
}
