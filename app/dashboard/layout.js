import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import HeaderDashboard from "@/app/components/dashboard/HeaderDashboard"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <HeaderDashboard />
        <div className="p-5">{children}</div>
      </main>
    </SidebarProvider>
  )
}