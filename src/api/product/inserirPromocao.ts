import { AxiosError } from "axios"
import { api } from "../api"
import { toast } from "react-toastify"

export const setPromocao = async (codigo: string, precoPromocao: number, token: string) => {
  try {
    await api.put(`/produtos/${codigo}`, {precoPromocao}, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        toast.error(error.response.data.mensagem)
      }

      if (error.response?.status === 500) {
        toast.error(error.response.data.mensagem)
      }
    }    
  }
}