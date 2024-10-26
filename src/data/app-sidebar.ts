import {
  Home,
  FolderKanban,
  Rss,
  StickyNote,
  CircleUser,
  TrendingUp,
} from 'lucide-react'

export const appSidebarData = [
  {
    id: 1,
    name: 'Замовлення',
    icon: Home,
    link: 'admin',
  },
  {
    id: 2,
    name: 'Товари',
    icon: FolderKanban,
    link: 'admin/products',
  },
  {
    id: 3,
    name: 'Блог',
    icon: Rss,
    link: 'admin/blog',
  },
  {
    id: 4,
    name: 'Сторінки',
    icon: StickyNote,
    link: 'admin/pages',
  },
  {
    id: 5,
    name: 'Клієнти',
    icon: CircleUser,
    link: 'admin/clients',
  },
  {
    id: 6,
    name: 'Статистика',
    icon: TrendingUp,
    link: 'admin/statistics',
  },
]
