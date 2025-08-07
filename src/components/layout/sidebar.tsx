// src/components/layout/sidebar.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Home, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  Package
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Müşteriler', href: '/customers', icon: Users },
  { name: 'Faturalar', href: '/invoices', icon: FileText },
  { name: 'Ürünler', href: '/products', icon: Package },
  { name: 'Raporlar', href: '/reports', icon: BarChart3 },
  { name: 'Ayarlar', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-gray-50 border-r">
      <div className="flex items-center h-16 px-4 border-b">
        <span className="text-xl font-bold text-blue-600">
          MuhasebeApp
        </span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}