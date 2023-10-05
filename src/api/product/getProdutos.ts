import { api } from '@/api/api'

import { cookies } from 'next/headers'

export interface GetProducts {
  _id: string
  codigo: string
  nome: string
  preco: number
  precoPromocao: number
  validade: string
}

export const getProdutos = async (token: string) => {
  try {
    const response = await api.get<GetProducts[]>('/produtos/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data ? response.data : []
  } catch (error) {}
}
