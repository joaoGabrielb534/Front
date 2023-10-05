'use client'

import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { destroyCookie, parseCookies } from 'nookies'
import { ReactNode, createContext, useEffect } from 'react'

const AuthContext = createContext({})

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const cookies = parseCookies()

  useEffect(() => {
    if (cookies[secret]) {
      api
        .get('/funcionarios', {
          headers: { Authorization: `Bearer ${cookies[secret]}` },
        })
        .then((response) => response)
        .catch((error) => {
          if (error instanceof AxiosError) {
            console.log()

            if (error.response?.status === 401) {
              destroyCookie(undefined, secret)
              router.push('/')
            }
          }
        })
    }
  }, [])

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
