import { ReactNode, ButtonHTMLAttributes } from 'react'

import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  loading: boolean
}

export default function Button({ children, loading }: ButtonProps) {
  const childrenLoading = loading ? (
    <Loader2 className="animate-spin" />
  ) : (
    <span>{children}</span>
  )

  const classLoading = loading
    ? `flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 font-normal cursor-not-allowed`
    : `flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 font-normal`

  return (
    <div className="w-full">
      <button disabled={loading} className={classLoading}>
        {childrenLoading}
      </button>
    </div>
  )
}
