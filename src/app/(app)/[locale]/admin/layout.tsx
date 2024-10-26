import { AppSidebar } from '@/components/admin/app-sidebar/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/admin/ui/sidebar'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: LanguageType }
}) {
  return (
    <div className="mx-auto max-w-[1248px]">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      {children}
    </div>
  )
}
