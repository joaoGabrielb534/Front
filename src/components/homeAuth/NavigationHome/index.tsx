'use client'

import { authService } from '@/api/auth'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function NavigationHome() {
  const router = useRouter()

  return (
    <div className="flex items-center space-x-8 text-center">
      <Link href={'/promotion'}>Cadastrar promoção</Link>
      <Link href={'/product'}>Cadastrar produto</Link>
      <button
        onClick={() => authService.logOut(router)}
        className="flex items-center gap-2"
      >
        <span>Sair</span>
        <LogOut />
      </button>
    </div>
  )
}
