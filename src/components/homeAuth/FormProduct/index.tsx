'use client'

import React, { FormEvent, useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

import { toast } from 'react-toastify'
import { criarProduto } from '@/api/product/criarProdutos'

import { parseCookies } from 'nookies'

export function FormProduct() {
  const [nome, setNome] = useState<string>('')
  const [tipo, setTipo] = useState<string>('')
  const [codigo, setCodigo] = useState<string>('')
  const [preco, setPreco] = useState<string>('')
  const [validade, setValidade] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    setLoading(true)

    if (!Number(preco)) {
      setLoading(false)
      return toast.error('Digite o preço do produto valido')
    }

    const data = {
      nome,
      tipoProduto: tipo,
      codigo,
      preco: Number(preco),
      validade,
    }

    const response = await criarProduto(
      data,
      parseCookies()[process.env.NEXT_PUBLIC_SECRET as string],
    )

    console.log('Teste')

    if (response?.status === 201) {
      toast.success('Produto criado com sucesso')
      setNome('')
      setTipo('')
      setCodigo('')
      setValidade('')
      setPreco('')
    }

    setLoading(false)
  }

  return (
    <div className="container flex w-[600px] flex-col gap-4">
      <span className="my-3 text-center text-xl font-bold">
        Registrar produto
      </span>
      <form onSubmit={handleForm} className="gap-4 pb-3">
        <div className="flex flex-col gap-3">
          <Input
            value={nome}
            after={true}
            type="text"
            required
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
          >
            Nome
          </Input>
          <Input
            value={tipo}
            after={true}
            type="text"
            required
            placeholder="Digite o tipo do produto"
            onChange={(e) => setTipo(e.target.value)}
          >
            Tipo do produto
          </Input>
          <Input
            value={codigo}
            after={true}
            type="text"
            required
            placeholder="Digite seu código"
            minLength={10}
            onChange={(e) => setCodigo(e.target.value)}
          >
            Codigo
          </Input>
          <Input
            value={preco}
            after={true}
            type="text"
            required
            placeholder="Digite o preço do produto"
            onChange={(e) => setPreco(e.target.value)}
          >
            Preço
          </Input>
          <Input
            value={validade}
            after={true}
            type="date"
            required
            placeholder="Enter the price"
            onChange={(e) => setValidade(e.target.value)}
          >
            Validade
          </Input>

          <Button loading={loading} type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}
