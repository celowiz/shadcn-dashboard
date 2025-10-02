import { Home, Inbox, Calendar, Search, Settings, User, ChevronUp, Projector, Plus, ChevronDown } from "lucide-react"
import { 
	Sidebar, 
	SidebarContent, 
	SidebarFooter, 
	SidebarGroup, 
	SidebarGroupAction, 
	SidebarGroupContent, 
	SidebarGroupLabel, 
	SidebarHeader, 
	SidebarMenu, 
	SidebarMenuItem, 
	SidebarMenuButton, 
	SidebarSeparator,
	SidebarMenuBadge,
	SidebarMenuSubButton, 
	SidebarMenuSubItem, 
	SidebarMenuSub, 
} from "./ui/sidebar"
import { Collapsible, CollapsibleContent } from "./ui/collapsible"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { CollapsibleTrigger } from "./ui/collapsible"

const items = [
    {
        title: "Home",
        url: "/",
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
    }
]

export default function AppSideBar() {
    return (
        <Sidebar collapsible="icon">
						
						{/* HEADER */}
            <SidebarHeader className="py-4">
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="/">
											<Image src="/vercel.svg" alt="Logo" width={20} height={20} />
											<span>My Dashboard</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
            </SidebarHeader>

						<SidebarSeparator />

						{/* CONTENT */}
            <SidebarContent>
				      <SidebarGroup>
								<SidebarGroupLabel>Application</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										{items.map(item=>(
											<SidebarMenuItem key={item.title}>
												<SidebarMenuButton asChild>
													<Link href={item.url}>
														<item.icon />
														<span>{item.title}</span>
													</Link>
												</SidebarMenuButton>
												{item.title === "Inbox" && (
                    			<SidebarMenuBadge>24</SidebarMenuBadge>
												)}
											</SidebarMenuItem>
										))}
									</SidebarMenu>
							  </SidebarGroupContent>
            	</SidebarGroup>
							<SidebarGroup>
								<SidebarGroupLabel>Projects</SidebarGroupLabel>
								<SidebarGroupAction>
									<Plus /> <span className="sr-only">Add Project</span>
								</SidebarGroupAction>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<Link href="#">
												  <Projector />
													See All Projects
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<Link href="#">
												  <Projector />
													Add Project
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>

							{/* COLLAPSIBLE */}
							<Collapsible defaultOpen className="group/collapsable">
								<SidebarGroup>
									<SidebarGroupLabel asChild>
										<CollapsibleTrigger>
										  Collapsible Group 
											<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsable:rotate-180" />
										</CollapsibleTrigger>
									</SidebarGroupLabel>
									<CollapsibleContent>
										<SidebarGroupContent>
											<SidebarMenu>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">
															<Projector />
															See All Projects
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">
															<Projector />
															Add Project
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											</SidebarMenu>
										</SidebarGroupContent>
									</CollapsibleContent>
								</SidebarGroup>
							</Collapsible>
							
							{/* NESTED  */}
							<SidebarGroup>
								<SidebarGroupLabel>Nested Items</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<Link href="#">
												  <Projector />
													See All Projects
												</Link>
											</SidebarMenuButton>
											<SidebarMenuSub>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton asChild>
														<Link href="#">
														  <Plus />
														  Add Project
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton asChild>
														<Link href="/#">
															<Plus />
															Add Category
														</Link>
													</SidebarMenuSubButton>
                  			</SidebarMenuSubItem>
											</SidebarMenuSub>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>

						</SidebarContent>

						{/* FOOTER  */}
            <SidebarFooter>
						  <SidebarMenu>
								<SidebarMenuItem>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<SidebarMenuButton>
												<User /> Marcelo Wizenberg <ChevronUp className="ml-auto"/>
											</SidebarMenuButton>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>Account</DropdownMenuItem>
											<DropdownMenuItem>Setting</DropdownMenuItem>
											<DropdownMenuItem>Sign Out</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</SidebarMenuItem>
							</SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};



