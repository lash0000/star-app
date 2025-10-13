/***********************************************************************************************************************************************************************
* File Name: SidebarLayout.jsx
* Type of Program: Layout Route
* Description: A Layout route for dashboard page. 
* Module: Dashboard (User)
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Outlet } from "react-router-dom";
import { Menu, User, LogOut, Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "../ThemeProvider"

function SidebarLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="w-full flex items-center justify-between border-b px-6">
          <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2">
            <SidebarTrigger icon={Menu} className="-ml-1 lg:hidden" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <img
                    src="/philpro-white.png"
                    alt="Image"
                    className="dark:hidden w-40"
                  />
                  <img
                    src="/philpro-dark.png"
                    alt="Image"
                    className="hidden dark:block w-40"
                  />
                </BreadcrumbItem>

              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/lash0000.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0">
              <div className="flex flex-col">
                {/* Email Header */}
                <div className="px-8 py-3 text-center border-b">
                  <p className="xs:text-xs md:text-sm font-medium">obsequio.kenneth.ampoloquio@gmail.com</p>
                </div>
                <div className="flex flex-col items-center py-6 px-4">
                  <div className="relative">
                    <Avatar className="size-20">
                      <AvatarImage src="https://github.com/lash0000.png" />
                      <AvatarFallback>KO</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border">
                      <svg className="size-4 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Kenneth Obsequio</h3>
                  <p className="text-sm text-muted-foreground font-medium">Learner</p>
                </div>
                <div className="border-t">
                  <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-3 rounded-none">
                    <User className="size-4" />
                    <span className="text-sm font-medium">Profile</span>
                  </Button>
                  <Button variant="ghost" onClick={toggleTheme} className="w-full justify-start gap-3 px-4 py-3 rounded-none">
                    {theme === 'light' ? (
                      <>
                        <Moon classNam="size-4" />
                        <span className="text-sm font-medium">Switch to Dark</span>

                      </>
                    ) : (
                      <>
                        <Sun />
                        <span className="text-sm font-medium">Switch to Light</span>
                      </>
                    )}
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-3 rounded-none">
                    <LogOut className="size-4" />
                    <span className="text-sm font-medium">Sign out</span>
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-slate-100 dark:bg-muted p-8">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default SidebarLayout;
