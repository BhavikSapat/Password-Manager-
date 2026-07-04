"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export function AppSidebar() {
  const route = useRouter();
  const handleLogOut = () => {
    const is = confirm("Logged Out");
    if (is) {
      route.push("/");
    }
  };
  return (
    <Sidebar className="top-16 h-[calc(100vh-4rem)]">
      <SidebarHeader>
        <h2 className="text-lg font-bold px-2">Dashboard</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard">
                  <SidebarMenuButton>Home</SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/dashboard/cards">
                  <SidebarMenuButton>Cards</SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link href="/dashboard/setting">
                  <SidebarMenuButton>Setting</SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="favicon.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
              </Avatar>

              <div className="flex flex-col">
                <CardTitle>Bhavik Sapat</CardTitle>
                <CardDescription>sapatbhavik101@gmail.com</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <Button
              variant="destructive"
              size="sm"
              className="w-full"
              onClick={() => handleLogOut()}
            >
              Log Out
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
