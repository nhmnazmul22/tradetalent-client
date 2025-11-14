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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Logo_v2 from "../common/Logo_v2";
import { menuItems } from "@/constant";
import { Link, NavLink } from "react-router";
import { ChevronDown, ChevronUp, Settings } from "lucide-react";
import Button from "../common/Button";

function AppSidebar() {
  return (
    <Sidebar className="z-999 lg:hidden">
      <SidebarHeader>
        <Logo_v2 />
      </SidebarHeader>
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.label === "Categories") {
                  return (
                    <Collapsible
                      key={item.label}
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className="hover:bg-green-500 hover:text-white"
                        >
                          <CollapsibleTrigger className="flex items-center w-full ">
                            <div className="flex gap-2 items-center">
                              <item.icon size={16} />
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <CollapsibleContent>
                        <SidebarGroupContent>
                          {item.items?.map((childItem) => (
                            <Collapsible
                              key={childItem.label}
                              defaultOpen={false}
                              className="ml-4 "
                            >
                              {/* ---------------- Child Category ---------------- */}
                              <SidebarMenuItem>
                                <SidebarMenuButton
                                  asChild
                                  className="hover:bg-green-500 hover:text-white"
                                >
                                  <CollapsibleTrigger className="flex items-center gap- w-full">
                                    <div className="flex items-center gap-2">
                                      <childItem.icon size={16} />
                                      <span className="text-sm">
                                        {childItem.label}
                                      </span>
                                    </div>
                                    <ChevronDown className="ml-auto transition-transform data-[state=open]:rotate-180" />
                                  </CollapsibleTrigger>
                                </SidebarMenuButton>
                              </SidebarMenuItem>

                              <CollapsibleContent>
                                <SidebarGroupContent className="ml-4">
                                  {childItem.subItems?.map((subItem) => (
                                    <SidebarMenuItem key={subItem.label}>
                                      <SidebarMenuButton
                                        asChild
                                        className="hover:bg-green-500 hover:text-white"
                                      >
                                        <Link to={subItem.href}>
                                          <span className="text-sm">
                                            {subItem.label}
                                          </span>
                                        </Link>
                                      </SidebarMenuButton>
                                    </SidebarMenuItem>
                                  ))}
                                </SidebarGroupContent>
                              </CollapsibleContent>
                            </Collapsible>
                          ))}
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-green-500 hover:text-white"
                    >
                      <NavLink
                        to={item.href}
                        className="flex items-center gap-2"
                      >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col gap-2">
              <Button variant="outline">Post a Job</Button>
              <Button className="w-full">Join as Freelancer</Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="items-center hidden">
                  <Settings></Settings>
                  Settings
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[260px] z-999">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
