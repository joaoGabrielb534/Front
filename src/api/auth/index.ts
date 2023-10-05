import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { toast } from 'react-toastify'

import { destroyCookie, parseCookies, setCookie } from 'nookies'

interface LoginProps {
  cpf: string
  senha: string
}

interface RegistrarProps {
  nome: string
  cpf: string
  senha: string
  idade: string
  email: string
}

export const authService = {
  login: async (data: LoginProps) => {
    try {
      const response = await api.post('/auth/funcionario', data)

      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const { token } = response.data

      setCookie(undefined, secret, token, {
        maxAge: 60 * 60 * 24,
        path: '/',
      })

      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.status)
        console.log(error.response?.data.mensagem)

        if (error.response?.status === 401) {
          toast.error(error.response.data.mensagem)
        }
        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  signUp: async (data: RegistrarProps) => {
    try {
      const response = await api.post('/funcionarios', data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.mensagem)
        }

        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  logOut: (router: AppRouterInstance) => {
    const secret = process.env.NEXT_PUBLIC_SECRET as string

    const token = parseCookies()

    if (token[secret]) {
      destroyCookie(undefined, secret)
      router.push('/')
    }

    router.push('/')
  },
  getFuncionario: async (token: string) => {
    return api.get('/funcionarios', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
