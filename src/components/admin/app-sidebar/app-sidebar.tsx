'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/admin/ui/sidebar'
import React from 'react'
import { appSidebarData } from '@/data/app-sidebar'

export function AppSidebar() {
  const locale = useLocale()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-[150px]">
              {appSidebarData.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={`/${locale}/${item.link}`}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
