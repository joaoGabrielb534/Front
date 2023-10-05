import { InputHTMLAttributes, ReactNode } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  after: boolean
}

export default function Input({ children, after, ...props }: InputProps) {
  const isAfter: string = after ? `after:text-red-500 after:content-['*']` : ''
  return (
    <label className="w-[100%]">
      <span
        className={`block text-sm font-medium text-slate-700 after:ml-0.5 ${isAfter}`}
      >
        {children}
      </span>
      <input
        {...props}
        className="w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-sm focus:outline-sky-500"
      />
    </label>
  )
}
