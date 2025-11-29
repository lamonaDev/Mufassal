import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Ellipsis } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        <Sidebar side="left">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip="Expand Settings" className="font-black">Settings <Ellipsis /></SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/profile">Profile</a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <a href="/notifications">Notifications</a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                    <Collapsible  className="group/collabsible">
                                                        <SidebarMenuItem>
                                                            <CollapsibleTrigger asChild>
                                                                <SidebarMenuButton tooltip="Expand Settings">Another Section <Ellipsis /></SidebarMenuButton>
                                                            </CollapsibleTrigger>
                                                            <CollapsibleContent>
                                                                <SidebarMenuSub>
                                                                    <SidebarMenuSubItem>
                                                                        <SidebarMenuButton asChild>
                                                                            <a href="#">one</a>
                                                                        </SidebarMenuButton>
                                                                    </SidebarMenuSubItem>
                                                                    <SidebarMenuSubItem>
                                                                        <SidebarMenuButton asChild>
                                                                            <a href="#">two</a>
                                                                        </SidebarMenuButton>
                                                                    </SidebarMenuSubItem>
                                                                    <SidebarMenuSubItem>
                                                                        <SidebarMenuButton asChild>
                                                                            <a href="#">three</a>
                                                                        </SidebarMenuButton>
                                                                    </SidebarMenuSubItem>
                                                                </SidebarMenuSub>
                                                            </CollapsibleContent>
                                                        </SidebarMenuItem>
                                                    </Collapsible>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}