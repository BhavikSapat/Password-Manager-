import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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

export function AppSidebar() {
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
                <SidebarMenuButton>Home</SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>Blogs</SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>Settings</SidebarMenuButton>
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
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
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
            <Button variant="destructive" size="sm" className="w-full">
              Log Out
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
