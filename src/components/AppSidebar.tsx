import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Info, LayoutGrid } from "lucide-react";

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
  SidebarRail,
} from "@/components/ui/sidebar";

const navItems = [
  {
    title: "Home",
    to: "/",
    icon: Home,
  },
  {
    title: "About",
    to: "/about",
    icon: Info,
  },
];

export function AppSidebar() {
  const { location } = useRouterState();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="gap-2 px-3">
        <div className="flex items-center gap-3 transition-all duration-200 group-data-[state=collapsed]:gap-2">
          <LayoutGrid className="size-6 shrink-0 text-primary transition-all duration-200" />
          <div className="space-y-1 overflow-hidden whitespace-nowrap transition-all duration-200 group-data-[state=collapsed]:w-0 group-data-[state=collapsed]:opacity-0">
            <p className="text-lg font-semibold leading-tight">Shadcn Starter</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.to} tooltip={item.title}>
                    <Link to={item.to} className="flex items-center gap-2">
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3">
        <p className="text-xs text-muted-foreground transition-opacity duration-200 group-data-[state=collapsed]:opacity-0">
          Press Cmd/Ctrl + B to toggle
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
