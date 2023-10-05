import { getProdutos } from '@/api/product/getProdutos'
import FormPromotion from '@/components/homeAuth/FormPromotion'
import HeaderHome from '@/components/homeAuth/HeaderHome'
import { cookies } from 'next/headers'
import React from 'react'

export default async  function Promotion() {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const token = cookies().get(secret)?.value as string
  const response = await getProdutos(token) || []
  return (
    <div>
      <HeaderHome/>
      <FormPromotion products={response}  />
    </div>
  )
}
