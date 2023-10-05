import { ReactNode } from 'react'

interface HeaderLogoProps {
  children: ReactNode
}

export default function HeaderAuth({ children }: HeaderLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  )
}
