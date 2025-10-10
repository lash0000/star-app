import * as React from "react"
import {
  House,
  Command,
  SquareTerminal,
  Menu,
  BookMarked,
} from "lucide-react"
import { NavLists } from "@/components/nav-list"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Kenneth Obsequio",
    email: "obsequio.kenneth.ampoloquio@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Welcome, Obsequio",
    logo: Menu,
    plan: "Free Plan",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
    },
    {
      title: "Checklist",
      url: "#",
      icon: Command,
    },
    {
      title: "Courses",
      url: "#",
      icon: BookMarked,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground hover:none flex aspect-square size-8 items-center justify-center rounded-lg">
              <SidebarTrigger icon={Menu} />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{data.teams.name}</span>
              <span className="truncate text-xs text-muted-foreground">{data.teams.plan}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <NavLists projects={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
