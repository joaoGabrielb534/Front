'use client'

import { authService } from '@/api/auth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function FormSignIn() {
  const router = useRouter()

  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    setLoading(true)

    const response = await authService.login({ cpf, senha })

    setLoading(false)

    if (response?.status === 200) {
      router.push('/dashboard')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <Input
          after={false}
          type="txt"
          required
          placeholder="Digite seu CPF"
          onChange={(e) => setCpf(e.target.value)}
        >
          CPF
        </Input>
        <Input
          after={false}
          type="password"
          required
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        >
          Senha
        </Input>
        <Button loading={loading} type="submit">
          Entrar
        </Button>
      </form>
      <div>
        <Link href={'/signUp'} className="text-gray-400 hover:text-gray-700">
          Não possui conta? Registre-se
        </Link>
      </div>
    </div>
  )
}
