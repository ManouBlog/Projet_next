import { ScissorsLineDashed, Home, Inbox,UserCircle , User, Timer,CalendarCheck,Heart ,CreditCard } from "lucide-react"
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
} from "@/components/ui/dropdown-menu"

// Menu items.
const items = [
  {
    title: "Accueil",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Catégories de services",
    url: "/dashboard/categorie_service",
    icon: Inbox,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    icon: ScissorsLineDashed,
  },
  {
    title: "Clients",
    url: "/dashboard/clients",
    icon: UserCircle ,
  },
  {
    title: "Réservations",
    url: "/dashboard/appointment",
    icon: CalendarCheck,
  },
  // {
  //   title: "Réservations",
  //   url: "/dashboard/appointment",
  //   icon: PersonStanding,
  // },
   {
    title: "Favoris",
    url: "/dashboard/favoris",
    icon: Heart,
  },
  {
    title: "Historique de paiement",
    url: "/dashboard/payment",
    icon: CreditCard,
  },
  {
    title: "Employés",
    url: "/dashboard/employe",
    icon: UserCircle ,
  },
  {
    title: "Heure de travail",
    url: "/dashboard/horaire",
    icon: Timer,
  },
  {
    title: "Profil",
    url: "/dashboard/profile",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>CoiffeurPro</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className='my-2' key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <div className="flex justify-center">
               <Link href='/'>Déconnexion</Link>
                </div>
                {/* <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> 
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger> */}
                
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}