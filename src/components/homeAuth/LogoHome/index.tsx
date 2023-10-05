import Link from 'next/link'

export function LogoHome() {
  return (
    <div>
      <Link href={'/dashboard'}>
        <span className="text-xl font-bold">SUPERMERCADO</span>
      </Link>
    </div>
  )
}
