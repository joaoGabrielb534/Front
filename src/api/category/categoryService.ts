import { api } from '@/api/api'
import { AxiosError } from 'axios'

import { toast } from 'react-toastify'

export interface CategoryProps {
  id: string
  name: string
}

export const categoryService = {
  create: async (name: string, token: string) => {
    try {
      const response = await api.post(
        '/categories/register',
        { name },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.mensagem)
        }
        if (error.response?.status === 422) {
          toast.error('Name is required')
        }

        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },

  getCategories: async (token: string): Promise<CategoryProps[] | []> => {
    const response = await api.get<CategoryProps[]>('/categories', {
      headers: { Authorization: `Bearer ${token}` },
    })

    return response.data ? response.data : []
  },
}
