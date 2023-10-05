'use client'

import { GetProducts, getProdutos } from '@/api/product/getProdutos'
import { Product } from '../Product'
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'

export function ListProduct() {
  const [products, setProducts] = useState<GetProducts[]>()

  useEffect(() => {
    const getData = async () => {
      const cookies = parseCookies()
      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const response = await getProdutos(cookies[secret])
      setProducts(response)
    }

    getData()
  }, [products])

  const size = products?.length

  if (!size) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500/70">Nenhum produto cadastrado...</p>
      </div>
    )
  }

  const responsive =
    'max-[1538px]:grid-cols-3 max-[630px]:grid-cols-2 max-[420px]:grid-cols-1'

  return (
    <div className={`container grid grid-cols-5 gap-5 py-8 ${responsive}`}>
      {products?.map((product) => (
        <Product
          key={product._id}
          nome={product.nome}
          preco={product.preco}
          precoPromocao={product.precoPromocao}
          validade={product.validade}
        />
      ))}
    </div>
  )
}
