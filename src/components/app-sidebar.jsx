/***********************************************************************************************************************************************************************
* File Name: app-sidebar.jsx
* Type of Program: Frontend Layout
* Description: Frontend Layout for Dashboard page. 
* Module: Dashboard
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

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
        { title: "Readings in History", url: "#", name: "RIPH-111 (8 AM-10 AM)" },
        { title: "Economics 101", url: "#", name: "ECON-101 (12 PM-3 PM)" },
        { title: "Introduction to Psychology", url: "#", name: "PSYC-100 (9 AM-11 AM)" },
        { title: "Fundamentals of Programming", url: "#", name: "CS-101 (1 PM-4 PM)" },
        { title: "College Algebra", url: "#", name: "MATH-110 (10 AM-12 NN)" },
        { title: "Purposive Communication", url: "#", name: "ENGL-102 (7 AM-9 AM)" },
        { title: "Science, Technology, and Society", url: "#", name: "STS-101 (11 AM-1 PM)" },
        { title: "Art Appreciation", url: "#", name: "ARTS-101 (3 PM-5 PM)" },
      ]

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
            <div className=" text-sidebar-primary-foreground hover:none flex aspect-square size-8 items-center justify-center rounded-lg">
              <SidebarTrigger className="bg-primary dark:bg-blue-950" icon={Menu} />
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
