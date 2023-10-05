'use client'

import { authService } from '@/api/auth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { toast } from 'react-toastify'

export function FormSignUp() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [loading, setLoading] = useState(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (senha !== confirmarSenha) {
      setLoading(false)
      return toast.error('As senhas não estão iguais!')
    }

    const response = await authService.signUp({
      nome,
      cpf,
      senha,
      idade,
      email,
    })

    setLoading(false)

    if (response?.status === 201) {
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <Input
            after={true}
            type="text"
            required
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
          >
            Nome
          </Input>
          <Input
            after={true}
            type="text"
            required
            placeholder="Digite seu cpf"
            minLength={11}
            maxLength={11}
            onChange={(e) => setCpf(e.target.value)}
          >
            CPF
          </Input>
          <Input
            after={true}
            type="email"
            required
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          >
            E-mail
          </Input>
          <Input
            after={true}
            type="text"
            required
            placeholder="Digite sua idade"
            onChange={(e) => setIdade(e.target.value)}
          >
            Idade
          </Input>

          <Input
            after={true}
            type="password"
            required
            placeholder="Digite sua senha"
            minLength={8}
            onChange={(e) => setSenha(e.target.value)}
          >
            Senha
          </Input>
          <Input
            after={true}
            type="password"
            required
            placeholder="Comfirme sua senha"
            minLength={8}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          >
            Confirme sua senha
          </Input>
        </div>
        <Button loading={loading} type="submit">
          Registrar
        </Button>
      </form>
      <div>
        <Link
          href={'/'}
          className="text-gray-400 hover:text-gray-700 max-sm:text-sm"
        >
          Já possui uma conta? Acesse
        </Link>
      </div>
    </div>
  )
}
