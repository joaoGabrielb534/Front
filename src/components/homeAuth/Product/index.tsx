import Image from 'next/image'

interface ProductProps {
  nome: string
  preco: number
  precoPromocao: number
  validade: string
}

export function Product(data: ProductProps) {
  const promotion = (((data.preco - data.precoPromocao) / data.preco) * 100)  

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-gray-400/20 px-4 py-4 shadow-lg">
      <div className='flex justify-end'>
        <span className='text-green-500 text-lg'>{promotion.toFixed(0)}% de desconto</span>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={
            'https://png.pngtree.com/png-vector/20200410/ourmid/pngtree-cardboard-color-boxes-illustration-png-image_2178052.jpg'
          }
          alt="teste"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.nome}</span>
       {
        !data.precoPromocao ? (
          <span className="from-neutral-300 text-xl text-green-800">
            R$: {data.preco.toFixed(2)}
          </span>
        ) : (
          <div className='flex flex-col'>
            <span className="text-gray-500/70 line-through">
              R$ {data.preco.toFixed(2)}
            </span>
            <span className="from-neutral-300 text-xl text-green-800">
              R$: {data.precoPromocao.toFixed(2)}
            </span>
          </div>
        )
       }
        <span className="text-gray-500/70">
          Validade: {new Date(data.validade).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  )
}



      