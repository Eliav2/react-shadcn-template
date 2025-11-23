import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const RootLayout = () => (
  <SidebarProvider className="bg-muted/40">
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-14 items-center gap-2 border-b bg-background px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Dashboard</span>
          <span className="text-sm font-semibold">React Shadcn Template</span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </SidebarInset>
  </SidebarProvider>
);

export const Route = createRootRoute({
  component: RootLayout,
});
