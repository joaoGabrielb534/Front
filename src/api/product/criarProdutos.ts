import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface CriarProdutoProps {
  nome: string
  codigo: string
  validade: string
  tipoProduto: string
  preco: number
}

export const criarProduto = async (data: CriarProdutoProps, token: string) => {
  try {
    const response = await api.post('/produtos', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        toast.error(error.response.data.mensagem)
      }
      if (error.response?.status === 409) {
        toast.error(error.response.data.mensagem)
      }

      if (error.response?.status === 500) {
        toast.error('Internal server error')
      }
    }
  }
}
