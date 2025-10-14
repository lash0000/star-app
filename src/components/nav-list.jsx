/***********************************************************************************************************************************************************************
* File Name: nav-list.jsx
* Type of Program: Frontend Layout
* Description: Frontend layout of Sidebar for Dashboard Page. 
* Module: Dashboard (User)
* Author: lash0000
* Date Created: Oct. 10, 2025
***********************************************************************************************************************************************************************
* Change History:
* DATE                AUTHOR            LOG NUMBER     DESCRIPTION                                                      
* Oct. 10, 2025       lash0000          001            Initial creation - STAR Phase 1 Project
***********************************************************************************************************************************************************************/

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarActiveIndicator } from "@/components/ui/sidebar-active-indicator";
import { Link, useLocation } from "react-router-dom";

function normalizePath(path) {
  if (!path) return "/";
  if (path === "#") return "#";
  try {
    const p = String(path);
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  } catch {
    return "/";
  }
}

function isActiveUrl(itemUrl, pathname) {
  if (!itemUrl || !pathname) return false;

  // Normalize paths (remove trailing slashes)
  const cleanItem = itemUrl.replace(/\/+$/, "");
  const cleanPath = pathname.replace(/\/+$/, "");
  if (cleanPath === cleanItem) return true;

  const itemSegments = cleanItem.split("/").filter(Boolean);
  const pathSegments = cleanPath.split("/").filter(Boolean);
  if (pathSegments.length > itemSegments.length) {
    const allMatch = itemSegments.every((seg, i) => seg === pathSegments[i]);
    if (allMatch) return false;
  }

  return itemSegments.every((seg, i) => seg === pathSegments[i]);
}

export function NavLists({ projects }) {
  const { pathname: rawPathname } = useLocation();
  const pathname = normalizePath(rawPathname);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) =>
          item.items && item.items.length > 0 ? (
            <Collapsible
              key={item.title || item.name}
              asChild
              defaultOpen={item.items.some((si) => isActiveUrl(si.url, pathname) || isActiveUrl(item.url, pathname))}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title || item.name}
                    className="flex-wrap items-center h-auto"
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => {
                      const active = isActiveUrl(subItem.url, pathname);

                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className={`flex-wrap flex-col h-auto items-start gap-1 mb-1.5 ${active ? "text-foreground font-medium" : ""
                              }`}
                          >
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                              <p className="text-muted-foreground text-xs">{subItem.name}</p>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title || item.name}>
              <div className="relative">
                {isActiveUrl(item.url, pathname) && <SidebarActiveIndicator />}
                <SidebarMenuButton tooltip={item.title} className="flex-wrap h-auto items-center" asChild>
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </div>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}

